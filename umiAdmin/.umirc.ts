import { defineConfig } from 'umi';

export default defineConfig({
  // base: '/docs/',
  // publicPath: '/static/',
  // outputPath:'../layouts',
  // treeShaking: true,
  nodeModulesTransform: {
    type: 'none',
  },
  plugins: [
    // ['umi-plugin-react', {
    //   antd: true,
    //   dva: true, // 在此处启用 dva
    //   dynamicImport: false,
    //   title: 'hero',
    //   dll: false,
    //   routes: {
    //     exclude: [],
    //   },
    //   hardSource: false,
    // }],
  ],
  layout: {
    // 详细配置：https://github.com/ant-design/ant-design-pro-layout/blob/master/README.zh-CN.md
    // logo: '',  //layout 的 左上角 logo 的 url
    title: '1243',  //layout 的 左上角 的 title
    pure: false,   //是否删除掉所有的自带界面
    loading: true,
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout', // 指定以下页面的布局
      routes: [
        // dashboard
        // { path: '/', redirect: '/dashboard/analysis' },
        // {
        //   path: '/dashboard',
        //   name: 'dashboard',
        //   icon: 'dashboard',
        //   routes: [
        //     { path: '/dashboard/analysis', name: 'analysis', component: './Dashboard/Analysis' },
        //     { path: '/dashboard/monitor', name: 'monitor', component: './Dashboard/Monitor' },
        //     { path: '/dashboard/workplace', name: 'workplace', component: './Dashboard/Workplace' },
        //   ],
        // },
      ],
    },
    // {
    //   path: '/login',
    //   component: '../layouts/UserLayout',
    //   routes: [
    //     { path: '/', name: '', component: '' },
    //   ]
    // },
    // { path: '/', component: '@/pages/index' },
    // { exact: true, path: '/user', component: 'user' }
  ],
});
