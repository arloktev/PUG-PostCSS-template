'use strict'

import gulp from 'gulp';

const requireDir = require('require-dir')

const paths = {
  pages: {
    src: [
      './src/pages/*.pug'
    ],
    dist: './dist/',
    watch: [
      './src/blocks/**/*.pug',
      './src/pages/**/*.pug',
      './src/pug/**/*.pug'
    ]
  },
  scripts: {
    src: './src/assets/js/index.js',
    dist: './dist/assets/js/',
    watch: [
        './src/blocks/**/*.js',
        './src/assets/js/**/*.js'
    ]
  },
};

requireDir('./tasks/');

export { paths }

export const development = gulp.series('clean',
  gulp.parallel(['pages', 'scripts']),
  gulp.parallel('server')
);

export const production = gulp.series('clean',
  gulp.series(['pages', 'scripts'])
);

export default development;
