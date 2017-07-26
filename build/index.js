const ReactWebpack = require('easywebpack-react');
const clientConfig = require('./client');
const config = [clientConfig]

if (process.env.NODE_SERVER) {
  // development mode: webpack building and start webpack hot server
  ReactWebpack.server(config);
} else {
  // build file to disk
  ReactWebpack.build(config);
}
