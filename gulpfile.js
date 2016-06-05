var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*']
    });

/** serve **/

gulp.task('watch', ['default'], function() {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('js/**/*.js', ['scripts']);
});

/** sass **/

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.sass({
            outputStyle: "compressed",
            sourceMap: true
        }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('./css/'));
});

/** javascript **/

gulp.task('scripts', function () {
    return gulp.src([
        './js/**/*.js'
    ])
        .pipe($.concat('scripts.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest('./js/'));
});

/** images **/

gulp.task('images', function() {
    'use strict';

    return gulp.src('./images-original/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('./images'));
});

gulp.task('build', ['scripts','sass']);
