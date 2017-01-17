var gulp = require('gulp'),imagemin = require('gulp-imagemin'), clean = require('gulp-clean'),
concat = require('gulp-concat'),uglify = require('gulp-uglify'),usemin = require('gulp-usemin');

gulp.task('default', ['copy'], function(){
    gulp.start('usemin');
});

gulp.task('copy', ['clean'], function() {
    return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('build-img', function(){
    gulp.src('dist/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
});

// a nova tarefa clean
gulp.task('clean', function() {
     var stream = gulp.src('dist/')
        .pipe(clean());
    return stream;
});
gulp.task('usemin', function() {
  return gulp.src('dist/**/*.html')
    .pipe(usemin({
      js: [uglify]
    }))
    .pipe(gulp.dest('dist'));
});