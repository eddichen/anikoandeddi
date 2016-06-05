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

gulp.task('default', ['scripts','sass']);
