import emailPreview from './email-preview.cmp.js';
import {eventBus, EVENT_OPEN_MAIL} from '../../../../js/services/event-bus-service.js';

export default{
    props: ['emails'],
    template: `
        <section  class="emails-list">
            <table class="email-table">
                <div v-for="currEmail in emails" :key="currEmail.id" >
                    <email-preview :email="currEmail" @click.native="emailSelected(currEmail.id)" />
                </div>
            </table>
        </section>
    `,
    components: {
        emailPreview
    },
    methods: {
        emailSelected(emailId) {
            eventBus.$emit(EVENT_OPEN_MAIL, "opened");
            // console.log(this.$route.params);
            this.$router.push(`${this.$route.params.dir}/${emailId}`);
            console.log('clicked')
        },
        changeIsOpenMail(){
            console.log('here');
        }
    },
}