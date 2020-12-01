module.exports = {
  presets: [
    [
      "@vue/app",
      {
        modules: false,
        useBuiltIns: "entry"
      }
    ]
  ],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
        polyfills: [
          "es6.promise",
          "es6.symbol",
          "es6.array.iterator",
          "es6.promise",
          "es7.promise.finally"
        ]
      },
      "transform-react-jsx"
    ],
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
