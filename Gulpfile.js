var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	gulp.src('./assets/sass/storm.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest('./build/'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass','sass:watch']);