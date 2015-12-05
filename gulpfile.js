var gulp = require("gulp"),
  sass = require("gulp-sass"),
  connect = require("connect-history-api-fallback"),
  bs = require("browser-sync").create();


gulp.task('serve', function () {
  bs.init({
    server: {
      baseDir: ["./", "./src"],
      middleware: [connect()]
    }
  });

  gulp.watch("src/scss/*.scss", ['sass']);
  gulp.watch("src/app/*.html").on('change', bs.reload);
});


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src("app/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(bs.stream());
});

gulp.task('default', ['serve']);