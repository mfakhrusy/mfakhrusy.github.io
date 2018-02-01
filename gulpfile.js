const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const cp = require('child_process');
const prefix = require('gulp-autoprefixer');

const messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// build the jekyll site FOR DEVELOPMENT
gulp.task('jekyll-build', function(done) {
  // use bundle for github pages gem, a bit hacky
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'})
    .on('close', done);
});

// rebuild jekyll and page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
  browserSync.reload();
});

// wait for jekyll build, then launch the server
gulp.task('browser-sync', ['css', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

// compile files from _scss to both _site/css (for live injecting) and site (for future jekyll build)
gulp.task('css:sass', function() {
  return gulp.src('assets/scss/**/*.scss')
    .pipe(sass({
      includePaths: ['_scss'],
      onerror: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('css:library', function() {
  return gulp.src('_includes/css/**/*')
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
})

gulp.task('css', ['css:library', 'css:sass']);

gulp.task('js', function() {
  return gulp.src('_js/**/*.js')
    .pipe(gulp.dest('_site/assets/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('image', function() {
  return gulp.src('assets/img/**/*')
  .pipe(gulp.dest('_site/assets/img'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// watch scss files for changes and recompile
gulp.task('watch', function() {
  gulp.watch('_scss/**/*.scss', ['css:sass']);
  gulp.watch('_includes/css/**/*', ['css:library']);
  gulp.watch('_js/**/*.js', ['js']);
  gulp.watch('assets/img/**/*', ['image']);
  gulp.watch(
    ['*.html',
      '*.md',
      '*.yml',
      '_layouts/*.html', 
      '_includes/*.html', 
      '_posts/*'], 
    ['jekyll-rebuild']
  );
});

// default task
gulp.task('dev', ['browser-sync', 'css', 'js', 'image', 'watch']);