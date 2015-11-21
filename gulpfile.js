var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var rimraf = require('gulp-rimraf');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var templateCache = require('gulp-angular-templatecache');

gulp.task('default', ['build', 'watch']);
gulp.task('test', test);
gulp.task('build', ['jshint', 'build:vendor', 'build:source', 'css:vendor', 'css:source']);

gulp.task('build:vendor', buildVendor);
gulp.task('build:source', ['templates'], buildSource);
gulp.task('css:vendor', buildCssVendor);
gulp.task('css:source', buildCssSource);
gulp.task('jshint', jshint);
gulp.task('watch', watch);
gulp.task('templates', templates);
// Estas tarefas devem ser executadas separadamente
gulp.task('clean', clean);

/////////////////////////////////////////////////////
var baseDir = 'angular/';
var paths = {
    baseDir: baseDir,
    source: [
        baseDir + 'app.module.js',
        baseDir + '**/*.module.js',
        baseDir + '**/*.js'
    ],
    vendor: [
        'node_modules/angular/angular.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-material/angular-material.min.js',
        'node_modules/angular-material-icons/angular-material-icons.min.js',
        'node_modules/angular-material/angular-material-mocks.min.js',
        'node_modules/angular-messages/angular-messages.min.js',
        'node_modules/angular-ui-router/build/angular-ui-router.min.js',
        'node_modules/angular-loading-bar/build/loading-bar.min.js',
        'node_modules/ngstorage/ngStorage.min.js',
        'node_modules/restangular/dist/restangular.min.js',
    ],
    vendorCss: [
        'node_modules/angular-material/angular-material.min.css',
        'node_modules/angular-material/angular-material.layouts.min.css',
        'node_modules/angular-loading-bar/build/loading-bar.min.css'
    ],
    sourceCss: [
        'assets/**/*.css'
    ],
    dist: './public/'
};


function test() {
    console.log('karma...');
}

function buildVendor() {
    return gulp.src(paths.vendor)
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest(paths.dist + 'js/'));
}

function buildSource() {
    return gulp.src(paths.source)
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist + 'js/'));
}

function buildCssVendor() {
    return gulp.src(paths.vendorCss)
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest(paths.dist + 'css/'));
}

function buildCssSource() {
    return gulp.src(paths.sourceCss)
        .pipe(concat('app.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest(paths.dist + 'css/'));
}

function clean() {
    return gulp.src([paths.dist + '**/*.js', paths.dist + '**/*.css'], {
            read: false
        })
        .pipe(rimraf());
}

function jshint() {
    gulp.src(paths.source)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter("fail"));
}

function templates() {
    return gulp.src(paths.baseDir + 'components/**/*.html')
        .pipe(templateCache('templates.js', {
            standalone: true,
            module: 'app.templates'
        }))
        .pipe(gulp.dest(paths.baseDir));
}

function watch() {
    return gulp.watch([paths.source, paths.baseDir + '**/*.html'], ['build']);
}