const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const withAntdLess = require('next-plugin-antd-less')

const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './public/less/antd-custom.less'),
    'utf8'
  )
)

module.exports = withAntdLess({
  // optional
  modifyVars: themeVariables,
  // optional
  lessVarsFilePath: './public/less/antd-custom.less',
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config
  },
})
