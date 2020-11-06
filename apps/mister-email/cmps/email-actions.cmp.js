import { mailService } from '../services/mail-service.js';
import { eventBus, EVENT_MAIL_WAS_READ } from '../../../js/services/event-bus-service.js';

export default {
    template: `
    <div class="side-bar-container">
        <div class="side-bar">
            <div class="clickable flex align-center compose" @click="composeNewMail">  
                <span class="compose-plus">+</span>
                <span class="compose-mail">Compose</span>
            </div>
            <div :class="{isOn: isInputOn}" class="clickable flex align-center" @click="routeToInbox">
                <img src="apps/mister-email/assets/inbox.png" alt=""> <span class="mail-dir">Inbox <span class="unread">{{unread}}</span></span>
            </div>
            <div :class="{isOn: isSentOn}" class="clickable flex align-center" @click="routeToSentMails">
                <img src="apps/mister-email/assets/sent.png" alt=""> <span class="mail-dir">Sent</span>
            </div>
            <div :class="{isOn: isStarredOn}" class="clickable flex align-center" @click="routeToStarredMails">
                <img src="apps/mister-email/assets/started.png" alt=""> <span class="mail-dir">Starred</span>
            </div>
            <div :class="{isOn: isDeletedOn}" class="clickable flex align-center" @click="routeToDeletedMails">
                <img src="apps/mister-email/assets/trash.png" alt=""> <span class="mail-dir">Deleted</span>
            </div>
        </div>
    </div>
    `,
    data(){
        return {
            isInputOn: true,
            isStarredOn: false,
            isDeletedOn: false,
            isSentOn: false,
            unread: ''
        }
    },
    created(){
        this.updateUnread();

        eventBus.$on(EVENT_MAIL_WAS_READ, () => {
            this.updateUnread();
        });
    },
    methods: {
        updateUnread(){
            this.unread = mailService.getUnreadNum();
        },
        routeToSentMails(){
            this.removeAllOn();
            this.isSentOn = true;
            this.$router.push(`/mail/sent`);
        },
        routeToDeletedMails(){
            this.removeAllOn();
            this.isDeletedOn = true;
            this.$router.push(`/mail/deleted`);
        },
        routeToInbox(){
            this.removeAllOn();
            this.isInputOn = true;
            this.$router.push(`/mail/inbox`);
        },
        routeToStarredMails(){
            this.removeAllOn();
            this.isStarredOn = true;
            this.$router.push(`/mail/starred`);
        },
        composeNewMail(){
            this.removeAllOn();
            this.$router.push(`/mail/new`)
        },
        removeAllOn(){
            this.isInputOn = false;
            this.isStarredOn = false;
            this.isDeletedOn = false;
            this.isSentOn = false;
        }
    }
}