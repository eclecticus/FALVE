const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

gulp.task('sass', _ => {
  return gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', () => {
  gulp.watch('scss/main.scss', ['sass']);
})


gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir:"./public"
    }
  });
});

gulp.task('default', ['browser-sync', 'watch', 'sass']);
