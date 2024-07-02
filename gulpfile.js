const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass() {
  return gulp
    .src('./soucer/styles/*.scss')
    .pipe(sass())

    .pipe(gulp.dest('./build/styles'));
}

function funcaopadrao(callback) {
  setTimeout(function () {
    console.log('execultando via gulp');
    callback();
  }, 2000);
}

function dizoi(callback) {
  setTimeout(function () {
    console.log('olá gulp');
    diztchau();
    callback();
  }, 1000);
}

function diztchau() {
  console.log('chau gulp');
}

exports.default = gulp.parallel(funcaopadrao, dizoi);
exports.dizoi = dizoi;
exports.sass = compilaSass;
