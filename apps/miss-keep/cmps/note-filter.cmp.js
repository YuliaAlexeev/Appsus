export default {
    template: `
        <section class="note-filter">
            <form @submit.prevent="emitFilter">
                <input type="text" v-model="filterBy.byTxt" placeholder="Search"
                @input="emitFilter" />
                <select @change="emitSelectFilter" v-model="filterBy.byType">
                    <option value="">All</option>
                    <option value="noteTxt">Text</option>
                    <option value="noteImg">Images</option>
                    <option value="noteList">To Do's</option>
                    <option value="noteVideo">Video</option>
                </select>
            </form>
     
        </section>
    `,
    data() {
        return {
            filterBy: {byTxt: '', byType: ''}
        }
    },
    methods: {
        emitSelectFilter(){
            
            console.log('selected', this.filterBy.byType)
            this.$emit("filtered", JSON.parse(JSON.stringify(this.filterBy)));
        },
        emitFilter(){
            // this.$emit('filtered', this.filterBy)
            this.$emit("filtered", JSON.parse(JSON.stringify(this.filterBy)));
        }
    },
}
