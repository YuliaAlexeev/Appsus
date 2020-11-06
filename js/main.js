import { myRouter } from './routes.js';
import userMsg from '../js/services/user-msg-service.js';

const options = {
    el: '#app',
    router: myRouter,
    template: `
    <section class="wrapper">
        <header class="header">
            <h1>Appsus</h1>
            <nav class="nav clear-list">
                <router-link to="/" >Home</router-link>
                <router-link to="/mail/inbox" >Mail</router-link>
                <router-link to="/keep" >Keep</router-link>
            </nav>  
        </header>
        <main class="main">
            <router-view></router-view>
        </main>
        <footer class="footer">
            Coffee Rights Mira & Yulia 2020
        </footer>
    </section>`,
    components:{
        userMsg
    }
};

const app = new Vue(options);

