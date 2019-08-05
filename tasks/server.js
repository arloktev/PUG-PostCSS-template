
'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import browsersync from 'browser-sync';

gulp.task('server', () => {
  browsersync.init({
    server: './dist/',
    open: true,
    notify: false
  });

  gulp.watch(paths.pages.watch, gulp.parallel('pages'));
});
