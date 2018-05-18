const path = require('path');

const paths = {
  root: path.resolve(__dirname, '../'),
  dist: path.resolve(__dirname, '../dist'),
  src: path.resolve(__dirname, '../src'),
};

module.exports = {
  entry: {
    entry: path.join(paths.src, 'index.js'),
  },

  // NOTE: https://webpack.js.org/configuration/output/#module-definition-systems
  // 'library' definition provides for a script tag usage as well
  output: {
    path: paths.dist,
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'EurobankCore',
  },

  // NOTE: check https://webpack.js.org/configuration/devtool/
  // and https://github.com/webpack/webpack/tree/master/examples/source-map
  // and https://lorefnon.me/2016/12/03/on-webpack-and-source-map-integration.html
  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /(\.jsx|.js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'react',
                'stage-0',
                'env',
                //'stage-3',
                // [
                //     'env',
                //     {
                //         targets: {
                //             browsers: ['last 3 versions', 'ie >= 10'],
                //         },
                //     },
                // ],
              ],
              plugins: [
                require('babel-plugin-transform-regenerator'),
                require('babel-plugin-transform-runtime'),
              ],
            },
          },
        ],
        exclude: [
          path.resolve(paths.root, 'node_modules'),
          path.resolve(paths.root, '../../node_modules'),
        ],
      },
    ],
  },

  externals: {
    react: 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  },
};
