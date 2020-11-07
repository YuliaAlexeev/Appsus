
export default {
    template: `
    <section>
        <!-- <h2>Our apps</h2> -->
        <div class="apps-pic flex justify-center align-center">
            <img @click="routeToMail" class="welcome-pic" src="js/assets/apps.jpg" width=400 alt=""> 
            <img @click="routeToKeep" class="welcome-pic" src="js/assets/notes.jpg" width=400 alt=""> 
            <img class="welcome-pic" src="js/assets/books.jpg" width=400 alt=""> 
        </div>
    </section>
    `,
    methods: {
        routeToMail(){
            this.$router.push('/mail/inbox');
        },
        routeToKeep(){
            this.$router.push('/keep');
        }
    }
}