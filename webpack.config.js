'use strict';
var path = require('path');
var fs = require('fs');
var nodeModules = {};

fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

module.exports = {
  entry: './server.js',
  output: {
    path: './build',
    filename: 'app.js'
  },
  externals: nodeModules,
  module: {
    loaders: [
        { test: /\.js$/,
          loaders: ['babel-loader']
        },
        { test:  /\.json$/, loader: 'json-loader' },
    ]
  },
}
