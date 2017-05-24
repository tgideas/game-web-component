/*
 * Gulp Plugins
 */
var gulp 		 = require('gulp'),
    Promise  	 = require('promise'),
    connect      = require('gulp-connect');


/*
 * Setting Pathsstella
 */
var paths = {
	demo : 'demo/'
}

/* ---------------------------------------------------
 * Task Gulp Connect [搭建一个localhost:8080 的服务器]
 * https://github.com/avevlad/gulp-connect
 */
gulp.task('connect', function() {
 return new Promise(function (resolve, reject) {
    connect.server({
      root: paths.demo,
      livereload: true
    });
 });
});
gulp.task('reload-html', function () {
  return gulp.src([paths.demo  + '**/*.htm',paths.demo  + '**/*.html'])
    .pipe(connect.reload());
});


/* ---------------------------------------------------
 * Task Watch [CSS/JS 变更自动主让页面刷新]
 * https://github.com/floatdrop/gulp-watch
 */
gulp.task('watch-file', function () {
    // return gulp.watch(paths.demo+'css/**/*.css', gulp.parallel('reload-html'));
    return gulp.watch([paths.demo + '**/*.html',paths.demo + '**/*.htm', paths.demo + '**/*.css'], gulp.parallel('reload-html'));
});

// gulp 4.0 改写
gulp.task('watch-demo',gulp.parallel('connect','watch-file'));              //专题文件更新自动 F5