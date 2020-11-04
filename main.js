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
                    <router-link to="/book" >Book</router-link>
                    <router-link to="/about" >About</router-link>
                </nav>
            </div>  
        </header>
        <main class="main container">
            <router-view></router-view>
        </main>
        <user-msg />
        <footer class="footer">
            Coffe Rights 2020
        </footer>
    </section>`,
};

const app = new Vue(options);

