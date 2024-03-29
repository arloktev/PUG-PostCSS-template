'use strict';

import { paths } from '../gulpfile.babel';
import fs from 'fs';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import postcss from 'gulp-postcss';
import atImport from 'postcss-import';
import cssnext from 'postcss-cssnext';
import precss from 'precss';
import cssnano from 'cssnano';
import sourcemaps from 'gulp-sourcemaps';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import browsersync from 'browser-sync';
import debug from 'gulp-debug';
import yargs from 'yargs';

const argv = yargs.argv,
  production = !!argv.production;

const processors = [
  atImport(),
  cssnext,
  precss,
  cssnano({
    preset: 'default',
  }),
];

gulp.task('styles', () => {
  return gulp.src(paths.styles.src)
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(plumber({
      errorHandler: notify.onError(function(err){
        return {
          title: 'Ошибка компиляции стилей',
          message: err.message
        }
      })
    }))
    .pipe(postcss(processors))
    .pipe(gulpif(production, rename({
      suffix: '.min'
    })))
    .pipe(plumber.stop())
    .pipe(gulpif(!production, sourcemaps.write('./maps/')))
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(debug({
      'title': 'CSS files'
    }))
    .pipe(browsersync.stream());
});
