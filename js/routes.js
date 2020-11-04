import mailApp from './pages/mail-app.cmp.js';
import keepApp from './pages/keep-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import emailContainer from '../apps/mister-email/cmps/email-container.cmp.js';

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
        children: [
            {
                path: '/mail/:dir',
                component: emailContainer
            },
            //     path: 'newMail',
            //     component: newMail
            // },
        ]
    },
];

export const myRouter = new VueRouter({ routes: myRoutes });