APP_NAME   := cweventFormat
NPMBIN     := npm
PYTHONBIN  := python3.12
BUILDDIR   := $(PWD)/build/
DISTDIR    := $(PWD)/dist/
REPORTSDIR := $(PWD)/reports/

PACKAGE_PREFIX     ?= lambda/
PACKAGE_KMS_KEY_ID ?= alias/aws/s3
COMMIT_ID          :=$(shell git rev-parse --short HEAD)

.PHONY: clean build lint lint-report test test-report dist package package-dev package-test package-prod .npm-install .venv-install

check_defined = \
	$(strip $(foreach 1,$1, \
		$(call __check_defined,$1,$(strip $(value 2)))))
__check_defined = \
	$(if $(value $1),, \
		$(error Undefined $1$(if $2, ($2))))

clean:
	rm -fr -- node_modules || :
	rm -fr -- "$(BUILDDIR)" || :
	rm -fr -- "$(DISTDIR)" || :
	rm -fr -- "$(REPORTSDIR)" || :

build:
	[ -e "$(BUILDDIR)" ] || mkdir -p "$(BUILDDIR)"
	rsync -R package*.json *.md "$(BUILDDIR)"
	$(NPMBIN) install --production --prefix "$(BUILDDIR)"
	rsync -av --delete src/. "$(BUILDDIR)/src/"

.npm-install:
	$(NPMBIN) install

.venv-install:
	[ -e .venv ] || $(PYTHONBIN) -mvenv .venv
	.venv/bin/pip install -qq -r scripts/requirements.txt

lint: .npm-install
	$(NPMBIN) run-script lint
lint-report: .npm-install
	[ -e "$(REPORTSDIR)" ] || mkdir -p "$(REPORTSDIR)"
	$(NPMBIN) run-script lint -- --format=junit > "$(REPORTSDIR)/eslint.xml"

test: .npm-install
	$(NPMBIN) run-script test
test-report: .npm-install
	[ -e "$(REPORTSDIR)" ] || mkdir -p "$(REPORTSDIR)"
	$(NPMBIN) run-script test -- --reporter mocha-junit-reporter --reporter-options mochaFile="$(REPORTSDIR)/mocha.xml"

dist: build
	[ -e "$(DISTDIR)" ] || mkdir -p "$(DISTDIR)"
	cd "$(BUILDDIR)" && zip -yr "$(DISTDIR)/$(APP_NAME).zip" *

package: .venv-install
	[ -e "$(DISTDIR)" ] || mkdir -p "$(DISTDIR)"
	.venv/bin/python scripts/lambda-package-zip.py -a "$(APP_NAME)" -e latest --names commit -o "$(DISTDIR)/$(APP_NAME).zip" build/

package-dev: .venv-install
	[ -e "$(DISTDIR)" ] || mkdir -p "$(DISTDIR)"
	.venv/bin/python scripts/lambda-package-zip.py -a "$(APP_NAME)" -e dev --names commit -o "$(DISTDIR)/$(APP_NAME).zip" build/

package-test: .venv-install
	[ -e "$(DISTDIR)" ] || mkdir -p "$(DISTDIR)"
	.venv/bin/python scripts/lambda-package-zip.py -a "$(APP_NAME)" -e test --names commit -o "$(DISTDIR)/$(APP_NAME).zip" build/

package-prod: .venv-install
	[ -e "$(DISTDIR)" ] || mkdir -p "$(DISTDIR)"
	.venv/bin/python scripts/lambda-package-zip.py -a "$(APP_NAME)" -e prod --names commit -o "$(DISTDIR)/$(APP_NAME).zip" build/
