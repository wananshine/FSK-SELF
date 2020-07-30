import { Plugin } from 'E:/S/umiAntdpro/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','getInitialState','locale','locale','layout','request',],
});
plugin.register({
  apply: require('E:/S/umiAntdpro/src/app.tsx'),
  path: 'E:/S/umiAntdpro/src/app.tsx',
});
plugin.register({
  apply: require('E:/S/umiAntdpro/node_modules/umi-plugin-antd-icon-config/lib/app.js'),
  path: 'E:/S/umiAntdpro/node_modules/umi-plugin-antd-icon-config/lib/app.js',
});
plugin.register({
  apply: require('E:/S/umiAntdpro/src/.umi/plugin-access/rootContainer.ts'),
  path: 'E:/S/umiAntdpro/src/.umi/plugin-access/rootContainer.ts',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('E:/S/umiAntdpro/src/.umi/plugin-locale/runtime.tsx'),
  path: 'E:/S/umiAntdpro/src/.umi/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('@@/plugin-layout/runtime.tsx'),
  path: '@@/plugin-layout/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});
plugin.register({
  apply: require('E:/S/umiAntdpro/src/.umi/plugin-helmet/runtime.ts'),
  path: 'E:/S/umiAntdpro/src/.umi/plugin-helmet/runtime.ts',
});

export { plugin };
