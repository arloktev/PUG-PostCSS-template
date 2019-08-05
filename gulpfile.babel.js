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
  styles: {
    src: './src/assets/css/main.css',
    dist: './dist/assets/css/',
    watch: [
        './src/blocks/**/*.css',
        './src/assets/css/**/*.css'
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
  images: {
    src: [
      './src/assets/img/**/*.{jpg,jpeg,png,gif,tiff,svg}',
      '!./src/assets/img/favicon/*.{jpg,jpeg,png,gif,tiff}'
    ],
    dist: './dist/assets/img/',
    watch: './src/assets/img/**/*.{jpg,jpeg,png,gif,svg}'
  },
  fonts: {
    src: './src/assets/fonts/**/*.{ttf,woff,woff2}',
    dist: './dist/assets/fonts/',
    watch: './src/assets/fonts/**/*.{ttf,woff,woff2}'
  },
};

requireDir('./tasks/');

export { paths }

export const development = gulp.series('clean',
  gulp.parallel(['pages', 'styles', 'scripts', 'images', 'fonts']),
  gulp.parallel('server')
);

export const production = gulp.series('clean',
  gulp.series(['pages', 'styles', 'scripts', 'images', 'fonts'])
);

export default development;
