const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("./private/sass/main.scss")
    .pipe(sass())
    .pipe(dest("./public/css"));
}

function watchSass() {
  watch(["./private/sass/main.scss"], buildStyles);
}

exports.default = series(buildStyles, watchSass);
