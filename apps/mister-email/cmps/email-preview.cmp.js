import { mailService } from '../services/mail-service.js';
import { eventBus, EVENT_MAIL_WAS_READ } from '../../../js/services/event-bus-service.js';

export default {
    props: ['email'],
    template: `
    <div>
            <tr class="email-row" :class="{read:isRead}">
                <td class="email-td" @click.stop="checkEmail"><input type="checkbox"></td>
                <td class="email-td" width=50 @click.stop="starEmail"><span class="fa fa-star" :class="{starred: isStarred}"></span></td>
                <td class="email-td" width=300>{{email.sender}}</td>
                <td class="email-td" width=500>{{email.subject}}</td>
                <td class="email-td" width=200>{{sentAt}}</td>
                <td class="email-td trash" width=50 @click.stop="deleteEmail">
                    <img src="apps/mister-email/assets/trash.png">
                </td>
                <td class="email-td read-unread" width=50 @click.stop="toggleReadEmail">
                    <img src="apps/mister-email/assets/4.png">
                </td>
            </tr>
            
</div>
    `,
    data(){
        return{
            
        }
    },
    computed:{
        isRead(){
            return this.email.isRead;
        },
        isStarred(){
            return this.email.isStarred;
        },
        sentAt(){
            var emailDate = new Date(this.email.sentAt);
            var currDate = new Date();

            if(currDate.getFullYear() > emailDate.getFullYear()){
                return `${emailDate.getDate()}/${emailDate.getMonth()}/${emailDate.getFullYear()}`;
            }else{
                if(currDate.getMonth() > emailDate.getMonth() && currDate.getDate() !== emailDate.getDate()){
                    var date = emailDate.toDateString().split(' ');
                    return `${date[1]} ${date[2]}`;
                }else if(currDate.getMonth() > emailDate.getMonth() && currDate.getDate() === emailDate.getDate()){
                    return emailDate.toLocaleTimeString();
                }
            }
        }
    },
    methods: {
        checkEmail(){
            console.log('checked');
            mailService.checkEmail(this.email.id);
        },
        starEmail(){
            mailService.toggleStarEmail(this.email.id); 
        },
        deleteEmail(){
            var isRead = this.email.isRead;
            mailService.deleteEmail(this.email.id).then(() => {
                if(!isRead) {
                    eventBus.$emit(EVENT_MAIL_WAS_READ);
                }
            })
        },
        toggleReadEmail(){
            mailService.toggleReadEmail(this.email.id).then(() => {
                eventBus.$emit(EVENT_MAIL_WAS_READ);
            });

        }
    }
}