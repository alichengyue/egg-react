'use strict';
const ReactWebpack = require('easywebpack-react');
const WebpackClientBuilder = ReactWebpack.WebpackClientBuilder;
const WebpackBaseBuilder = require('../base');
class ClientBuilder extends WebpackBaseBuilder(WebpackClientBuilder) {
}
module.exports = new ClientBuilder().create();
