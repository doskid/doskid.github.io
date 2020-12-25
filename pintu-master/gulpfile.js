const gulp = require('gulp')
const sass = require('gulp-sass')
const webserver = require('gulp-webserver')

gulp.task('sass', function () {
  return gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style'));
});

gulp.task('watch', function () {
  gulp.watch('./css/**/*.scss', ['sass'])
})

gulp.task('webserver', function () {
  gulp
    .src(__dirname)
    .pipe(webserver({ livereload: true, open: true }));
})

gulp.task('dev', ['webserver', 'watch'])