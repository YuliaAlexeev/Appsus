import mailApp from './pages/mail-app.cmp.js';
import keepApp from './pages/keep-app.cmp.js';
import homePage from './pages/home-page.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: homePage,
    },
    {
        path: '/keep',
        component: keepApp,
    },
    {
        path: '/mail',
        component: mailApp,
    },
];

export const myRouter = new VueRouter({ routes: myRoutes });