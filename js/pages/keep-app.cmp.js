import { noteService } from "../../apps/miss-keep/services/keep-service.js";
import noteList from '../../apps/miss-keep/cmps/note-list.cmp.js';

export default {
    name: 'keep-app',
    template:
    `<section>
        <input type="text" v-model="newNote.info.txt" placeholder="add your note" />
        <button class="note-btn" @click="addNote" >Add</button>

        <note-list v-show="notesToShow" :notes="notesToShow"></note-list>

    </section>`,
    data() {
        return {
            // txt: '',
            notes: noteService.getNotes(),
            newNote: noteService.getEmptyNote()
        }
    },
    computed:{
        notesToShow(){
            return this.notes;
        }
    },
    methods:{
        addNote(){
            console.log('Note added!', this.newNote)
            noteService.addNewNote(this.newNote)
        }
    },
    created(){
       
        console.log('noteeeeeeeeees', this.notes)
    },
    components:{
        noteList
    }
}