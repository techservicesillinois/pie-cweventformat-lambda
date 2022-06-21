APPNAME    := cweventFormat
NPMBIN     := npm
BUILDDIR   := $(PWD)/build/
DISTDIR    := $(PWD)/dist/
REPORTSDIR := $(PWD)/reports/

PACKAGE_PREFIX     ?= lambda/
PACKAGE_KMS_KEY_ID ?= alias/aws/s3
COMMIT_ID          :=$(shell git rev-parse --short HEAD)

.PHONY: clean build lint lint-report test test-report dist package package-dev package-test package-prod .npm-install

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
	cd "$(BUILDDIR)" && zip -yr "$(DISTDIR)/$(APPNAME).zip" *

package:
	@:$(call check_defined, PACKAGE_BUCKET, S3 package bucket)
	$(eval _key  := $(PACKAGE_PREFIX)$(APPNAME)/commit-$(COMMIT_ID).zip)
	_kms_key='$(PACKAGE_KMS_KEY_ID)'; aws s3 cp dist/$(APPNAME).zip s3://$(PACKAGE_BUCKET)/$(_key) --sse aws:kms --sse-kms-key-id $${_kms_key:-alias/aws/s3}
	_kms_key='$(PACKAGE_KMS_KEY_ID)'; aws s3 cp dist/$(APPNAME).zip s3://$(PACKAGE_BUCKET)/$(PACKAGE_PREFIX)$(APPNAME)/latest.zip --sse aws:kms --sse-kms-key-id $${_kms_key:-alias/aws/s3}

package-dev:
	@:$(call check_defined, PACKAGE_BUCKET, S3 package bucket)
	$(eval _key := $(PACKAGE_PREFIX)$(APPNAME)/dev.zip)
	_kms_key='$(PACKAGE_KMS_KEY_ID)'; aws s3 cp dist/$(APPNAME).zip s3://$(PACKAGE_BUCKET)/$(_key) --sse aws:kms --sse-kms-key-id $${_kms_key:-alias/aws/s3}

package-test:
	@:$(call check_defined, PACKAGE_BUCKET, S3 package bucket)
	$(eval _key := $(PACKAGE_PREFIX)$(APPNAME)/test.zip)
	_kms_key='$(PACKAGE_KMS_KEY_ID)'; aws s3 cp dist/$(APPNAME).zip s3://$(PACKAGE_BUCKET)/$(_key) --sse aws:kms --sse-kms-key-id $${_kms_key:-alias/aws/s3}

package-prod:
	@:$(call check_defined, PACKAGE_BUCKET, S3 package bucket)
	$(eval _key := $(PACKAGE_PREFIX)$(APPNAME)/prod.zip)
	_kms_key='$(PACKAGE_KMS_KEY_ID)'; aws s3 cp dist/$(APPNAME).zip s3://$(PACKAGE_BUCKET)/$(_key) --sse aws:kms --sse-kms-key-id $${_kms_key:-alias/aws/s3}
