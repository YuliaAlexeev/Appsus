export default {
    template: `
        <div class="mail-header">
            <input class="input-search" type="text" placeholder="Search mail" v-model="search" />
        </div>
    `,
    data(){
        return {
            search: ''
        }
    }
}