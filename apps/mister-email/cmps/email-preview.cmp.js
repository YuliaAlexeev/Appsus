export default {
    props: ['email'],
    template: `
            <tr class="email-row" :class="{read:isRead}">
                <td class="email-td" width=50><span class="fa fa-star" :class="{starred: isStarred}"></span></td>
                <td class="email-td" width=300>{{email.sender}}</td>
                <td class="email-td" width=500>{{email.subject}}</td>
                <td class="email-td" width=200>{{sentAt}}</td>
            </tr>
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
    }
}