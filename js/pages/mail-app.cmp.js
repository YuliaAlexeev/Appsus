import { mailService } from '../../apps/mister-email/services/mail-service.js';
import emailList from '../../apps/mister-email/cmps/email-list.cmp.js';
import emailActions from '../../apps/mister-email/cmps/email-actions.cmp.js';
// import emailHeader from '../misterEmail/cmps/email-header.cmp.js';


export default {
        template: `
        <section class="email-container">
            <h1>email-page.cmp</h1>
            <!-- <email-header /> -->
            <div>
                <email-list v-if="!selectedEmail" @select="selectEmail($event)" :emails="emailsToShow"/>
                <email-actions/>
            </div>

            <!-- <email-details /> -->
        </section>
    `,
    components: {
        emailList,
        // emailCategories,
        emailActions

    },
    data() {
        return {
            emails: '',
            filterBy: null,
            selectedEmail: ''
        }
    },
    created(){
        mailService.getEmails().then(emails => this.emails = emails);
    },
    computed: {
        emailsToShow(){
            if (!this.filterBy) return this.emails;
        }
    },
    methods: {
        selectEmail(emailId) {
            mailService.getEmailById(emailId).then(email => this.selectedEmail = email);

        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    }
}