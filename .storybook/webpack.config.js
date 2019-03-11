const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'storybook-addon-vue-info/loader',
        enforce: 'post'
      },
      {
        test: /.scss$/,
        exclude: /node_modules/,
        loaders: [{ loader: 'style-loader' }, { loader: 'css-loader' },
          { 
            loader: 'sass-loader',
            options: {
              data: '@import "@/scss/settings.scss";'
            }
          } 
        ],
      }
    ],
  },
};
