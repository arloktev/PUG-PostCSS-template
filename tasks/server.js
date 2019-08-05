
'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import browsersync from 'browser-sync';

gulp.task('server', () => {
  browsersync.init({
    server: './dist/',
    open: true,
    port: 4000,
    notify: false
  });

  gulp.watch(paths.pages.watch, gulp.parallel('pages'));
  gulp.watch(paths.styles.watch, gulp.parallel("styles"));
  gulp.watch(paths.scripts.watch, gulp.parallel("scripts"));
  gulp.watch(paths.images.watch, gulp.parallel("images"));
  gulp.watch(paths.fonts.watch, gulp.parallel("fonts"));
});
