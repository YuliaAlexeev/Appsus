import { mailService } from '../services/mail-service.js';
import emailList from './email-list.cmp.js';
import newEmail from './new-email.cmp.js';


export default {
    template: `
        <div>
            <email-list v-if="!selectedEmail, !newEmail" @select="selectEmail($event)" :emails="emailsToShow"/>
            <new-email v-if="newMail"/>
        </div>
    `,
    components: {
        emailList,
        newEmail,
    },
    data() {
        return {
            emails: [],
            filterBy: null,
            selectedEmail: '',
            newMail: '',
            directory: 'inbox',
        }
    },
    created() {
        mailService.getEmails().then(emails => this.emails = emails);
    },
    computed: {
        emailsToShow() {
            console.log(this.directory)
            var emailsByDir = this.getByDir(this.directory);
            if (!this.filterBy) return emailsByDir;
        }
    },
    methods: {
        selectEmail(emailId) {
            mailService.getEmailById(emailId).then(email => this.selectedEmail = email);

        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        getByDir(directory) {
            var filteredEmails = [];
            switch (directory) {
                case "deleted":
                    filteredEmails = this.emails.filter(email => email.isDeleted);
                    break;
                case "sent":
                    filteredEmails = this.emails.filter(email => email.isSent);
                    break;
                case "starred":
                    filteredEmails = this.emails.filter(email => email.isStarred);
                    break;
                case "inbox":
                    filteredEmails = this.emails.filter(email => !email.isDeleted && !email.isSent);
                    break;
            }
            return filteredEmails;
        },
        composeNewEmail(){
            this.newMail = 'test';
            console.log('test')
        }
    },
    watch: {
        '$route.params.dir'(to) {
            console.log('params changed', to);
            this.directory = to;
            if(this.directory === 'new') this.composeNewEmail();
        }
    }
}