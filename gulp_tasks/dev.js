import gulp from 'gulp';

gulp.task('dev', function() {
	gulp.watch([ 'src/scss/**/*' ], [ 'style' ]);
	gulp.watch([ 'src/js/**/*' ], [ 'script' ]);
});