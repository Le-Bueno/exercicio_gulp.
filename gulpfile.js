const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const images = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
           .pipe(sass())
           .pipe(gulp.dest('./build/styles'))
}

function comprimeImagens(){
    return gulp.src('./source/images/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./build/images'))
}

function comprimeJavascript(){
    return gulp.src('./source/scripts/*.js')
           .pipe(uglify())
           .pipe(gulp.dest('./build/scripts'))
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavascript));
} 