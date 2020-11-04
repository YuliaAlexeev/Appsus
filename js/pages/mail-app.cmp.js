import emailActions from '../../apps/mister-email/cmps/email-actions.cmp.js';
import emailHeader from '../../apps/mister-email/cmps/email-header.cmp.js';
import emailContainer from '../../apps/mister-email/cmps/email-container.cmp.js';


export default {
        template: `
        <section class="main-container">
            <h1>mail-app</h1>
            <email-header />
            <div class="email-container">
                <email-actions/>
                <router-view></router-view>
            </div>
        </section>
    `,
    components: {
        emailActions,
        emailHeader,
        emailContainer,
    }
}