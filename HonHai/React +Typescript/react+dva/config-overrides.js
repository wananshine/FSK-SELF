const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
  addLessLoader,
  fixBabelImports,
  overrideDevServer,
  addBabelPlugin,
  addBabelPresets
} = require('customize-cra');
const path = require('path');

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets')
    }),


    addBabelPlugin(
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ),

    fixBabelImports(
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css"
      }
    )

  )
};
