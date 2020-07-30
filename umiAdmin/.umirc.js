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
    ],
});
//# sourceMappingURL=.umirc.js.map