const gulp = require('gulp');
const sass = require('gulp-sass');
const ts = require('gulp-typescript');
const sourceMaps = require('gulp-sourcemaps');

const ScssDirectory = 'scss/**/*.scss';
const CssDirectory = 'assets/css';
const TsDirectory = 'ts/*.ts';


gulp.task('typescript', function() {
    gulp.src(TsDirectory)
        .pipe(ts())
        .pipe(sourceMaps.init())
        .pipe(sourceMaps.write('/'))
        .pipe(gulp.dest('assets/script'));
});

gulp.task('sass', function() {
    gulp.src(ScssDirectory)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(CssDirectory));
});

gulp.task('sass:watch', function() {
    gulp.watch([ScssDirectory, TsDirectory], ['sass', 'typescript']);
});
gulp.task('default', ['sass', 'sass:watch' , 'typescript']);