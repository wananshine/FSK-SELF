const req = require.context('./svg', false, /\.svg$/);

const requireAll = requireContext => requireContext.keys().map(requireContext)

requireAll(req)

// const reg = /\.\/(.*)\.svg/;
//
// const svgIcons = requireAll(req).map(i => {
//   return i.match(req) && i.match(req)[1]
// })
