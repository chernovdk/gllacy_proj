var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	distPath = 'C:/WebServers/home/gllacy/www/';
    
  
gulp.task('js', function () {
	gulp.src(['js/data.js','js/script.js'])
//	.pipe(uglify())
	.pipe(concat('app.js'))
    .pipe(gulp.dest(distPath+'js'))
});


gulp.task('index', function () {
	gulp.src('index.html')
    .pipe(gulp.dest(distPath))
});


gulp.task('css', function () {
	gulp.src('sass/style.sass')
	.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(distPath+'css'))
});

gulp.task('php', function () {
	gulp.src('php/*.php')
    .pipe(gulp.dest(distPath+'php'))
});

gulp.task('watch', function() {
	gulp.watch('sass/*.sass', ['css']);
	gulp.watch('index.html', ['index']);
	gulp.watch('js/*.js', ['js']);
	gulp.watch('php/*.php', ['php']);
});


gulp.task('default', ['css', 'index', 'watch'], function() {

});