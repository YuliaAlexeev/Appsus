export default {
    template: `
        <section class="note-filter">
            <form @submit.prevent="emitFilter">
                <input type="text" placeholder="Search"
                @input="emitFilter" />
                <select>
                    <option value="all">All</option>
                    <option value="noteText">Text</option>
                    <option value="noteImg">Images</option>
                    <option value="noteList">To Do's</option>
                    <option value="noteVideo">Video</option>
                </select>
            </form>
            <!-- {{filterBy}} -->
        </section>
    `,
    // data() {
    //     return {
    //         filterBy : {byName: '', fromPrice: 0, toPrice: 50}
    //     }
    // },
    methods: {
        emitFilter(){
            // this.$emit('filtered', this.filterBy)
            this.$emit("filtered", JSON.parse(JSON.stringify(this.filterBy)));
        }
    }
}
