export default {

  "entry":  "./index.js",
  "html": {
    "template": "./index.ejs"
  },
  "publicPath": '/',
  "outputPath": './__dist',
  // "extraBabelPlugins": [
  //   ["import", { "libraryName": "antd", "style": true }]
  // ],
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        ["import", { "libraryName": "antd", "style": true }]
      ]
    },
    "production": {
      enableSourcemaps: true,
      "extraBabelPlugins": [
        ["import", { "libraryName": "antd", "style": true }]
      ]
    }
  }
}