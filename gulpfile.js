//import "babel-polyfill";

// import gulp from 'gulp';
// import gulpLoadPlugins from 'gulp-load-plugins';
// import browserSync from 'browser-sync';
// import pug from 'gulp-pug'; 
// import eslint from 'gulp-eslint';
// import babelify from 'babelify';
// import browserify from 'browserify';
// import source from 'vinyl-source-stream';

/*
  @OBS
  gulpfile.babel.js, com padrão import faz com que o gulp fique lento.
*/

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const pug = require('gulp-pug'); 
const eslint = require('gulp-eslint');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

const $ = gulpLoadPlugins();

const paths = {
  build:{
   img:'assets/img/**/*.*',
   sass:'assets/sass/*.scss',
   scripts:'assets/js/main.js', 
   pug:'views/index.pug'
  },
  watch:{
    sass:'assets/**/*.scss',
    pug:['views/**/*.pug','public/*.html'],
    img:'assets/img/**/*.*',
    scripts:['assets/js/**/*.js','!assets/js/hack/*.js','!assets/js/libs/*.js'],
    jsx:'assets/js/**/*.jsx'
  }
};

gulp.task('lint',() => {
  return gulp.src([ paths['build'].scripts, paths['watch'].jsx ])
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.eslint.failAfterError());
});

gulp.task('images',() => {
  return gulp.src(paths['build'].img)
    .pipe($.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest('public/img'));
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
  gulp.watch(paths['watch'].img,     ['images']);
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

// Build View
gulp.task('views:build', () => {
  return gulp.src('views/index.build.pug')
  .pipe(pug({pretty: true, data:{ prod : true }}))
  .pipe(gulp.dest('public/'))
  .pipe(browserSync.stream());
});

gulp.task('default', ['browserify', 'lint','sass', 'images', 'watch', 'views', 'browserLive']);
gulp.task('build',   ['views:build']);




