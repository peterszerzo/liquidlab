import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import util from 'gulp-util';
import minifyCss from 'gulp-minify-css';

gulp.task('style', () => {
	return gulp.src('./src/scss/site.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(util.env.production ? minifyCss() : util.noop())
		.pipe(gulp.dest('./public/styles'));
});