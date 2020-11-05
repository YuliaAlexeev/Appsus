import emailPreview from './email-preview.cmp.js';
import { mailService } from '../services/mail-service.js';

export default {
    template: `
        <section  class="emails-list">
            <table class="email-table">
                <div v-for="currEmail in emailsToShow" :key="currEmail.id" >
                    <email-preview :email="currEmail" @click.native="emailSelected(currEmail.id)" />
                </div>
            </table>
        </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: null,
        }
    },
    components: {
        emailPreview
    },
    created() {
        mailService.getEmails().then(emails => this.emails = emails);
    },
    computed: {
        emailsToShow() {
            var currDir = this.$route.params.dir;
            var emailsByDir = this.getByDir(currDir);

            if (!this.filterBy) return emailsByDir;
        }
    },
    methods: {
        emailSelected(emailId) {
            this.$router.push(`${this.$route.params.dir}/${emailId}`);
        },
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
        }
    }
}