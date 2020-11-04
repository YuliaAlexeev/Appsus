import emailPreview from './email-preview.cmp.js';

export default{
    props: ['emails'],
    template: `
        <section class="emails-list">
                <div v-for="currEmail in emails" :key="currEmail.id" >
                   <email-preview :email="currEmail" @click.native="emailSelected(currEmail.id)" />
                </div>
        </section>
    `,
    components: {
        emailPreview
    },
    methods: {
        emailSelected(emailId) {
            // this.$router.push(`/email/${emailId}`)
        }
    },
}