var gulp        = require('gulp');
var shell       = require('gulp-shell');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

gulp.task('watch', function() {
	gulp.watch('map_school/**/*.*').on('change', browserSync.reload);
});

gulp.task('build', shell.task(['jekyll build --watch']));

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: ''
		},
		startPath: '/map_school/',
		notify: false,
		ghostMode: false
	});
});

gulp.task('default', function() {

	runSequence(
		'watch',
		'browser-sync',
		'build'
	);

});
