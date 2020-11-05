import { mailService } from '../services/mail-service.js';
import emailList from './email-list.cmp.js';
import newEmail from './new-email.cmp.js';
import openMail from './open-mail.cmp.js';
import {eventBus, EVENT_OPEN_MAIL} from '../../../../js/services/event-bus-service.js';


export default {
    template: `
        <div>
            <email-list v-if="!selectedEmail, !newMail" @select="selectEmail($event)" :emails="emailsToShow"/>
            <new-email v-if="isNewMail" :prevDir="prevDir"/>
            <open-mail v-if="isOpenMail"/>
        </div>
    `,
    components: {
        emailList,
        newEmail,
        openMail
    },
    data() {
        return {
            emails: [],
            filterBy: null,
            selectedEmail: '',
            isNewMail: '',
            directory: 'inbox',
            prevDir: '',
            isOpenMail: false
        }
    },
    created() {
        mailService.getEmails().then(emails => this.emails = emails);
        eventBus.$on(EVENT_OPEN_MAIL, msg => {
            this.isOpenMail=true;
            console.log('eventBus catched event');
        })
    },
    computed: {
        emailsToShow() {
            var emailsByDir = this.getByDir(this.directory);
            if (!this.filterBy) return emailsByDir;
        }
    },
    methods: {
        changeIsOpenMail(){
            console.log('changeIsOpenMail');
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
    },
    watch: {
        '$route.params.dir'(to,from) {
            this.directory = to;
            if (this.directory === 'new') {
                this.isNewMail = true;
                this.prevDir = from;
            }
            else {
                this.isNewMail = false;
                this.prevDir = '';
            }
        }
    }
}