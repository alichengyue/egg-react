'use strict';
const path = require('path');
const ReactWebpack = require('easywebpack-react');
const merge = ReactWebpack.merge;
const baseDir = path.join(__dirname, '../../');
const webpackConfig = {
  baseDir,
  entry: {
    include: 'app/web/page',
    exclude: ['app/web/page/test']
  },
  html: {
   include: ['app/web/page/html'],
   exclude: [],
   template: 'app/web/view/layout.html',
   buildDir: 'html',
  },
  commonsChunk: ['vendor'],
};
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(webpackConfig, config));
    this.setAlias('asset', 'app/web/asset');
    this.setAlias('component', 'app/web/component');
    this.setAlias('framework', 'app/web/framework');
    this.setAlias('store', 'app/web/store');
    this.setStyleLoaderOption({
      sass: {
        options: {
          includePaths: [path.join(this.config.baseDir, 'app/web/asset/style')],
        }
      }
    });
  }
};
module.exports = WebpackBaseBuilder;
