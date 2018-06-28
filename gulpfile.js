const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const lintJS = require('gulp-eslint');
const minifyJS = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');


// JS tasks
// linting JS
gulp.task('lintMyJS', () => {
  gulp.src('scripts.js').pipe(lintJS()).pipe(gulp.dest('build'));
});

// CSS tasks
gulp.task('autoprefix', () => {
  gulp.src('styles.css').pipe(autoprefixer()).pipe(gulp.dest('build'));
})
