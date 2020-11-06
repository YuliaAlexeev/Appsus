export default {
    template: `
        <div class="mail-header flex justify-center align-center">
            <label for="searchIt">
                <img class="clickable" width=50 heigth=50 src="apps/mister-email/assets/search.jpg"></img>
            </label>
            <input id="searchIt" class="input-search" type="text" placeholder="Search mail" v-model="search" />

            <!-- <select v-model="review.rating"> -->
            <select class="sort">
                    <option width=50 heigth=50>Latest on top</option>
                    <option width=50 heigth=50>Sort by title</option>
            </select>

            <select class="filter-by-read">
                    <option width=50 heigth=50>All</option>
                    <option width=50 heigth=50>Read</option>
                    <option width=50 heigth=50>Unread</option>
            </select>

            

        </div>
    `,
    data(){
        return {
            search: ''
        }
    }
}