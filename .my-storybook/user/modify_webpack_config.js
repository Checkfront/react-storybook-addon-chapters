const path = require('path');

module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.
  config.module.loaders.push({
      test: /\.css?$/,
      loaders: ['style', 'css'],
      include: path.resolve(__dirname, '../'),
    }
  );

  config.module.loaders.push({
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader',
      query: {
        limit: 8192
      }
    }
  );
};
