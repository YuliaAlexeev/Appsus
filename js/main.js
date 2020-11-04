import { myRouter } from './routes.js';

const options = {
    el: '#app',
    router: myRouter,
    template: `
    <section>
        <header class="header">
            <div class="header-inner container">
                <h1>Appsus</h1>
                <nav class="nav clear-list">
                    <router-link to="/" >Home</router-link>
                    <router-link to="/mail/inbox" >Mail</router-link>
                    <router-link to="/keep" >Keep</router-link>
                </nav>
            </div>  
        </header>
        <main class="main container">
            <router-view></router-view>
        </main>
        <footer class="footer">
            Coffee Rights Mira & Yulia 2020
        </footer>
    </section>`,
};

const app = new Vue(options);

