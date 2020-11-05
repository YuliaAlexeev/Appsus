import { mailService } from "../services/mail-service.js";

export default {
    props: ['prevDir'],
    template: `
        <form class="new-email" @submit.prevent="sendMail">
            <div class="newMessage flex space-between">
                <span>New Message</span>
                <span class="cancel clickable" @click="cancelMail">x</span>
            </div>
            <input type="text" placeholder="To" v-model="newMail.to" />
            <input type="text" placeholder="Subject" v-model="newMail.subject" />
            <textarea v-model="newMail.body" rows="10" cols="50"></textarea>
            <div><button class="btn clickable">Send</button></div>
        </form>
    `,

    data() {
        return{
            newMail: null
        }
    }, 
    created(){
        this.newMail = mailService.getEmptyMail();
    },
    methods: {
        sendMail(){
            mailService.sendMail(this.newMail);
            this.$router.push(this.prevDir);
        },
        cancelMail(){
            this.$router.push(this.prevDir);
        }
    }
}