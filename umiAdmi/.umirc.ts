import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // {
    //   path: '/',
    //   exact: true,
    //   redirect: '/page/home',
    // },
    // {
    //   path: '/page',
    //   redirect: '/page/home',
    // },
    // {
    //   path: '/page',
    //   component: '@/layouts/BasicLayout',
    //   routes: []
    // },
    
    // {
    //   path: '/sign',
    //   redirect: '/sign/login',
    // },
    // {
    //   path: '/sign',
    //   // exact: true,
    //   component: '@/layouts/UserLayout',
    //   routes: []
    // }

    {
      path: '/',
      // exact: true,
      component: '@/pages/index',
      routes: []
    },
    // {
    //   path: '/',
    //   component: '@/pages/index',
    //   routes: [
    //     {
    //       path: '/page',
    //       exact: true,
    //       component: '@/layouts/BasicLayout',
    //       routes: [
    //         { path: '/home', exact: true, component: '@/pages/home/components/index'},
    //         { path: '/users', exact: true, component: '@/pages/users/components/index' },
    //       ]
    //     },
    //     {
    //       path: '/sign',
    //       exact: true,
    //       component: '@/layouts/UserLayout',
    //       routes: [
    //         { path: '/login', exact: true, component: '@/pages/login/components/index'},
    //         { path: '/register', exact: true, component: '@/pages/register/components/index' },
    //       ]
    //     }
    //   ]
    // }
  ],
});
