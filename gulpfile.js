var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();


gulp.task('browserSync', function() {
  browserSync.init({
     server: {
       baseDir: 'app'
     },
   })
 });

 gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') 
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//gulp.task('watch', function(){ 
 // gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
 // Other watchers
//});
 


gulp.task('watch', gulp.series('browserSync', 'sass'), function (){
  gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});



