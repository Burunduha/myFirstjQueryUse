const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css');

// Задача для запуска сервера BrowserSync
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './public'
    }
  });
});

// Задача для минификации JavaScript файлов
gulp.task('minify-js', function() {
  return gulp.src('app/**/*.js')
    .pipe(uglify())

    .pipe(gulp.dest('public'));
});

// Задача для компиляции SCSS в CSS и минификации
gulp.task('compile-scss', function() {
  return gulp.src('app/SASS/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/CSS'));
});

// Задача для отслеживания изменений в файлах JS и SCSS
gulp.task('watch', function() {
  gulp.watch('app/**/*.js', gulp.series('minify-js'));
  gulp.watch('app/**/*.scss', gulp.series('compile-scss'));
  gulp.watch('public/**/*').on('change', browserSync.reload);
});

// Задача по умолчанию, которая запускает все задачи
gulp.task('default', gulp.parallel('serve', 'minify-js', 'compile-scss', 'watch'));