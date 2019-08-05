var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Watch
const { watch } = require('gulp');
// Watcher for sass files
const sassWatcher = watch(['public/scss/*.scss']);

// sass gulp task
gulp.task('sass', function() {
    return gulp.src('public/scss/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('public/css'))
});

const watchSass = require("gulp-watch-sass")
 
gulp.task("sass:watch", () => watchSass([
  "public/scss/*.scss",
])
  .pipe(sass())
  .pipe(gulp.dest("public/css")));