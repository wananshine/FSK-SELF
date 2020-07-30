import { defineConfig } from 'umi';

export default defineConfig({

  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: true,
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/',
          component: '@/layouts/BasicLayout',
          routes: [
            { path: '/', component: '@/pages/home/components/index' },
            { path: '/home', component: '@/pages/home/components/index' },
            { path: '/users', component: '@/pages/users/component/index' }
          ]
        },
        {
          path: '/sign',
          component: '@/layouts/UserLayout'
        },
      ]
    },

    // {
    //   exact: true,
    //   path: '/',
    //   component: '@/layouts/BasicLayout',
    // },
    // {
    //   path: '/home',
    //   component: '@/pages/home/component/index' ,
    // },
    // {
    //   path: '/users',
    //   component: '@/pages/users/component/index' ,
    // },
    // {
    //   path: '/sign',
    //   component: '@/layouts/UserLayout' ,
    //   routes: [
    //     {
    //       path: 'login',
    //       component: '@/pages/login/component/index' ,
    //     },
    //     {
    //       path: '/register',
    //       component: '@/pages/register/component/index' ,
    //     }
    //   ]
    // }
  ],
});
