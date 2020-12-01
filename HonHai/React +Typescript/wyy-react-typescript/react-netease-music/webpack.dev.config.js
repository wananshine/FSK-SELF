import webpack from 'webpack'

export default {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',   // CSS的HMR需要使用style-loader
          {
            loader: 'css-loader',
            options: {
              import: true,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              },
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
        include: /src/
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  }
}
