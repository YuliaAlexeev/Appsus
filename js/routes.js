import mailPage from '../pages/mail-page.cmp.js';
import keepPage from '../pages/keep-page.cmp.js';
import homePage from '../pages/home-page.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: homePage,
    },
    {
        path: '/keep',
        component: keepPage,
    },
    {
        path: '/mail',
        component: mailPage,
    },
];

export const myRouter = new VueRouter({ routes: myRoutes });