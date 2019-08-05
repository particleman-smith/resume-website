var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Sass watcher requirement
const watchSass = require("gulp-watch-sass")

// sass gulp task
gulp.task('sass', function() {
    return gulp.src('public/scss/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('public/css'))
});

gulp.task("sass:watch", () => watchSass([
  "public/scss/*.scss",
])
  .pipe(sass())
  .pipe(gulp.dest("public/css")));