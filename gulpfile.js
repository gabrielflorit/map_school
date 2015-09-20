var gulp        = require('gulp');
var shell       = require('gulp-shell');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

gulp.task('watch', function() {
	gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('build', shell.task(['jekyll build --watch']));

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: ''
		},
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
