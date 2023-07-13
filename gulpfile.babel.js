const gulp = require('gulp');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('lint', () => {
  return gulp
    .src(['src/**/*.js']) 
    .pipe(eslint())
    .pipe(eslint.format());
});