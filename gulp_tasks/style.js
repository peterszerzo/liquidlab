import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';

gulp.task('style', () => {
	return gulp.src('./src/scss/site.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('./public/styles'));
});