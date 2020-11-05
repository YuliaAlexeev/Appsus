import { mailService } from '../services/mail-service.js';
import { eventBus, EVENT_MAIL_WAS_READ } from '/js/services/event-bus-service.js';

export default {
    template: `
    <div class="mail-details-container">
        <div>
            <img src="apps/mister-email/assets/3.png" @click="goBack"></img>
            <img src="apps/mister-email/assets/trash.png" @click="deleteEmail"></img>
            <img src="apps/mister-email/assets/4.png" @click="toggleReadEmail"></img>
            <img src="apps/mister-email/assets/6.png"></img>
        </div>
        <table class="mail-details"> 
            <th>{{email.subject}}</th>
            <tr>From: {{email.sender}}</tr>
            <tr>{{email.body}}</tr>
            <tr>{{email.sentAt}}</tr>
            <tr>
                <td><button>Reply</button></td>
                <td><button>Forward</button></td>
            </tr>
        </table>
    </div>

    `,
    data(){
        return{
            email: '',
            prevDir: ''
        }
    },
    created(){
        var emailId = this.$route.params.mailId;
        this.prevDir = this.$route.params.dir;
        mailService.getEmailById(emailId).then(mail => this.email = mail);

        if(!this.email.isRead){
            mailService.emailWasRead(emailId);
            eventBus.$emit(EVENT_MAIL_WAS_READ);

        }
    },
    methods: {
        goBack(){
            this.$router.push(`/mail/${this.prevDir}`);
        },
        deleteEmail(){
            mailService.deleteEmail(this.email.id).then(() => {
                this.$router.push(`/mail/${this.prevDir}`);
            })
        },
        toggleReadEmail(){
            mailService.toggleReadEmail(this.email.id).then(() => {
                eventBus.$emit(EVENT_MAIL_WAS_READ);
                this.$router.push(`/mail/${this.prevDir}`);
            });

        }
    }

}