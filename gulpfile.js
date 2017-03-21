var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

//Start browserSync server
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//Watchers
gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

//Optimization CSS nad JavaScript
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    //minifies js files
    .pipe(gulpIf('*.js', uglify()))
    //minifies css files
    .pipe(gulpIf('*.css', cssnano()))
    //destination folder
    .pipe(gulp.dest('dist'))
});

//Optimization Images
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('dist/images'))
});

//Copying fonts
gulp.task('fonts', function(){
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

//Cleaning
gulp.task('clean', function(){
  return del.sync('dist').then(function(cb){
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function(){
  return del.sync(['dist/**/*', '!dist/images', '!dist/**/*']);
});

//Build Sequences
gulp.task('default', function(callback){
  runSequence(['sass','browserSync'], 'watch', callback)
});

gulp.task('build', function(callback){
  runSequence('clean:dist', 'sass',['useref', 'images', 'fonts'], callback)
});
