import emailActions from '../../apps/mister-email/cmps/email-actions.cmp.js';
import emailHeader from '../../apps/mister-email/cmps/email-header.cmp.js';
import userMsg from '../../apps/mister-email/cmps/usr-msg.cmp.js';


export default {
        template: `
        <section class="main-container">
        <email-header />
        <user-msg/>
            <div class="email-container">
                <email-actions/>
                <router-view></router-view>
            </div>
        </section>
    `,
    components: {
        emailActions,
        emailHeader,
        userMsg
    }
}