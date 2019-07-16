const { series, parallel, src, dest } = require('gulp');
const _clean = require('gulp-clean');
const _zip = require('gulp-zip');
const { exec } = require('child_process');

function clean() {
    return src(['build/', 'dist/'], { read: false })
        .pipe(_clean());
}

function hbs() {
    return src('src/**/*.hbs')
        .pipe(dest('build/src/'));
}

function js() {
    return src('src/**/*.js')
        .pipe(dest('build/src/'));
}

function npm() {
    return exec(
        'npm install',
        {
            cwd: 'build/',
            env: {
                ...process.env,
                NODE_ENV: process.env.NODE_ENV || 'production',
            }
        }
    )
}

function pkg() {
    return src('package*.json')
        .pipe(dest('build/'));
}

function zip() {
    return src('build/**/*')
        .pipe(_zip('cweventFormat.zip'))
        .pipe(dest('dist/'));
}

exports.clean = clean
exports.default = series(parallel(hbs, js, series(pkg, npm)), zip);
