const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publidDir = path.resolve(__dirname, 'public');

module.exports = [
  {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: './src/index.tsx',
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.js',
    },
    // module: {
    //   rules: [
    //     {
    //       test: /\.(js|jsx)$/,
    //       exclude: /node_modules/,
    //       use: [
    //         {
    //           loader: 'babel-loader',
    //           options: {
    //             presets: ['react', 'es2015'],
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            { loader: 'ts-loader' },
            {
              loader: 'tslint-loader',
              options: {
                fix: true
              }
            },
          ]
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: publidDir,
    },
  },
  {
    mode: 'development',
    entry: {
      style: './sass/style.scss',
    },
    output: {
      path: publidDir,
      publicPath: '/',
      filename: 'bundle.css',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
    ],
  },
];


// module.exports = {
//   mode: 'development',
//   devtool: 'cheap-module-source-map',
//   entry: [
//     __dirname + '/gaprot2/index.tsx'
//   ],
//   output: {
//     publicPath: '/dist',
//     filename: 'bundle.js'
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx'],
//   },
//   plugins: [
//     new webpack.NamedModulesPlugin(),
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader'
//       }
//     ]
//   },
// }
