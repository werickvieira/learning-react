//import "babel-polyfill";

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import pug from 'gulp-pug'; 
import eslint from 'gulp-eslint';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

const $ = gulpLoadPlugins();

const paths = {
  build:{
   sass:'assets/sass/*.scss',
   scripts:'assets/js/main.js', 
   pug:'views/index.pug'
  },
  watch:{
    sass:'assets/sass/*.scss',
    pug:'views/*.pug',
    scripts:'assets/js/*.js',
    jsx:'assets/js/**/*.jsx'
  }
}

gulp.task('lint',() => {
  return gulp.src([ paths['build'].scripts, paths['watch'].jsx ])
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.eslint.failAfterError());
});


gulp.task('browserify', () => {
  const bundler = browserify(paths['build'].scripts); 
  return bundler
    .transform(babelify) 
    .bundle()
    .pipe(source('bundle.js'))
    //.pipe($.uglify())
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream());
});

gulp.task('sass',() =>{
  return gulp.src(paths['build'].sass)
    .pipe($.sass())
    .pipe($.cssnano({
      autoprefixer: { browsers: 'last 5 versions', add: true}
    }))
    .pipe(gulp.dest('public/css/'))
    .pipe(browserSync.stream());
});

gulp.task('views', () => {
  return gulp.src(paths['build'].pug)
  .pipe(pug({pretty: true, data:{ prod : false } }))
  .pipe(gulp.dest('public/'))
  .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  gulp.watch(paths['watch'].jsx,     ['browserify', 'lint']);
  gulp.watch(paths['watch'].scripts, ['lint']);
  gulp.watch(paths['watch'].sass,    ['sass']);
  gulp.watch(paths['watch'].pug,     ['views']);
}).on('change', browserSync.reload);

gulp.task('browserLive',() => {
  browserSync.init({
    port: 8000,
    server: {
      baseDir: [
        './public/'
      ]
    }
  });
});


gulp.task('default', ['browserify', 'lint','sass', 'watch', 'views', 'browserLive']);





