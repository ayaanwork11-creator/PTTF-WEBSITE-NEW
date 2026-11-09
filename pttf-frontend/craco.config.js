const { createRequire } = require('module');
const { resolve } = require('path');

module.exports = {
  styleLoaderOptions: {
    cssLoaderOptions: {
      // Add custom configuration for CSS loading
    },
  },
  webpack: {
    alias: [
      {
        find: /^~/,
        replacement: (path) => resolve(__dirname, 'node_modules', path.split('/')[1]),
      },
    ],
    configure: (webpackConfig) => {
      // Customize webpack configuration
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        '~': resolve(__dirname, 'src'),
      };
      return webpackConfig;
    },
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
};