export default {
    template: `
        <div class="side-bar">
            <div class="clickable" @click="composeNewMail"> + Compose</div>
            <div class="clickable" @click="routeToInbox">Inbox</div>
            <div class="clickable" @click="routeToSentMails">Sent</div>
            <div class="clickable" @click="routeToStarredMails">Starred</div>
            <div class="clickable" @click="routeToDeletedMails">Deleted</div>
        </div>
    `,
    methods: {
        routeToSentMails(){
            this.$router.push(`/mail/sent`);
        },
        routeToDeletedMails(){
            this.$router.push(`/mail/deleted`);
        },
        routeToInbox(){
            this.$router.push(`/mail/inbox`);
        },
        routeToStarredMails(){
            this.$router.push(`/mail/starred`);
        },
        composeNewMail(){
            this.$router.push(`/mail/new`)
        }
    }
}