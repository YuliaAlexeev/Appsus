import emailPreview from './email-preview.cmp.js';

export default{
    props: ['emails'],
    template: `
        <section class="emails-list">
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
            // this.$router.push(`/email/${emailId}`)
            console.log('clicked')
        }
    },
}