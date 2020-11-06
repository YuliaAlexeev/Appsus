import { eventBus, USR_MSG } from '../../../js/services/event-bus-service.js';

var timer;

export default {
    template: `
        <section v-show="msg" class="user-msg">
            <p>{{msg}}</p>
            <button @click="closeMessege">x</button>
        </section>
    `,
    data() {
        return {
            msg: null
        }
    },
    methods: {
        closeMessege() {
            this.msg = null;
            clearTimeout(timer)
        }
    },
    created() {
        eventBus.$on(USR_MSG, msg => {
            console.log('here')
            this.msg = msg
            timer = setTimeout(() => {
                console.log('closing');
                this.msg = null;
            }, 3000);
        });
    }
}