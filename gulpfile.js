'use strict';

var gulp = require('gulp'),
    changed = require('gulp-changed'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    csso = require('gulp-csso'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    del = require('del'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    p = {
      js: './scripts/main.js',
      jsBuild: './scripts/sword.js',
      bundle: 'sword.js',
      bundleMin: 'sword.min.js',
      distJs: 'dist/js'
    };

var browserifyTransform = [
      "deglobalify"
    ];
if (gulp.env.production) {
  browserifyTransform.push("uglifyify");
}

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watchify', function() {
  var bundler = watchify(browserify(p.js, watchify.args));

  function rebundle() {
    return bundler
      .transform("deglobalify")
      .bundle()
      .on('error', notify.onError())
      .pipe(source(p.bundle))
      .pipe(gulp.dest(p.distJs))
      .pipe(reload({stream: true}));
  }

  bundler.on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', function() {
  browserify(p.js)
    .transform("deglobalify")
    .bundle()
    .pipe(source(p.bundle))
    .pipe(buffer())
    //.pipe(uglify())
    .pipe(gulp.dest(p.distJs));
});

gulp.task('browserifyBuild', function() {
  browserify(p.jsBuild)
    .transform("deglobalify")
    .bundle()
    .pipe(source(p.bundleMin))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(p.distJs));
});

gulp.task('watch', ['clean'], function() {
  gulp.start(['browserSync', 'watchify']);
});

gulp.task('build', ['clean'], function() {
  process.env.NODE_ENV = 'production';
  gulp.start(['browserifyBuild', 'browserify']);
});

gulp.task('default', function() {
  console.log('Run "gulp watch or gulp build"');
});
