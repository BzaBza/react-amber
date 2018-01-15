let gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch');

gulp.task('sass', function () {
    return gulp.src('src/**.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('index.css'))
        .pipe(gulp.dest('src'))
});


gulp.task('watch', function () {
    watch('src/**.sass',
        function (a, b) {
            gulp.run('sass');
        });
});
