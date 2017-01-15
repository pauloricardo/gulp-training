var gulp = require('gulp'),imagemin = require('gulp-imagemin'), clean = require('gulp-clean');

gulp.task('copy', ['clean'], function() {
    gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('build-img', ['copy'], function(){
    gulp.src('dist/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
});

// a nova tarefa clean
gulp.task('clean', function() {
     var stream = gulp.src('dist')
        .pipe(clean());
    return stream;
});
