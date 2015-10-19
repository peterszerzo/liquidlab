import gulp from 'gulp';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import util from 'gulp-util';
import uglify from 'gulp-uglify';

import config from './config.js';

gulp.task('script-source', () => {
	return gulp.src(config.jsSource)
		.pipe(plumber())
		.pipe(concat('_source.js'))
		.pipe(babel())
		.pipe(gulp.dest('public/scripts'));
});

gulp.task('script-vendor', () => {
	return gulp.src(config.jsVendor)
		.pipe(plumber())
		.pipe(concat('_vendor.js'))
		.pipe(gulp.dest('public/scripts'));
});

gulp.task('script', [ 'script-source', 'script-vendor' ], () => {
	return gulp.src(['public/scripts/_vendor.js', 'public/scripts/_source.js'])
		.pipe(plumber())
		.pipe(concat('site.js'))
		.pipe(util.env.production ? uglify().on('error', util.log) : util.noop())
		.pipe(gulp.dest('public/scripts'));
});