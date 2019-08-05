'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import pug from 'gulp-pug';
import gulpif from 'gulp-if';
import replace from 'gulp-replace';
import browsersync from 'browser-sync';
import yargs from 'yargs';

const argv = yargs.argv,
  production = !!argv.production;

gulp.task('pages', () => {
  return gulp.src(paths.pages.src)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulpif(production, replace('.css', '.min.css')))
    .pipe(gulpif(production, replace('.js', '.min.js')))
    .pipe(gulp.dest(paths.pages.dist))
    .pipe(browsersync.stream());
});
