const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const Copyplugin = require('copy-webpack-plugin')

module.exports = {
  entry: './js/main.js', //parcel main.js와 비슷함, 파일을 읽어들이기 시작하는 진입점 설정 (JS파일로 동작)
  output: {              //결과물(번들)을 반환하는 설정
    // path : path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean : true
  },

  module : {
    rules:[
      {
        test : /\.s?css$/,
        use : [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use : [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new Copyplugin({
      patterns : [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host : 'localhost'
  }


}