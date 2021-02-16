let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let watch = require('gulp-watch')

gulp.task('minify-css', () => {
    return gulp.src('css/style.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./css/'));
})

gulp.task('sass', function () {
	return gulp.src('./scss/styles.scss')
		.pipe(sass())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./css/'));
});

gulp.task('minify-sass', gulp.series('sass', 'minify-css'));

// gulp.watch
gulp.task('watch', function () {
    // Watch for any file that ends in .scss in any directory:
    return gulp.watch('scss/**/*.scss',
        // If you find one, I want you to run minify sass:
    gulp.task('minify-sass'));
})