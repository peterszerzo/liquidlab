import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';

gulp.task('pg-deploy', () => {
	return gulp.src([ 'index.html', 'public/**/*'])
		.pipe(ghPages());
});