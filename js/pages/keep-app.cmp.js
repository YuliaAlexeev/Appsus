import { noteService } from "../../apps/miss-keep/services/keep-service.js";
import noteList from '../../apps/miss-keep/cmps/note-list.cmp.js';

export default {
    name: 'keep-app',
    template:
    `<section>
        <div class="new-note">
            <input type="text" v-model="newNote.info.txt" placeholder="add your note" />
            <button @click="addNote" class="new-note-btn fas fa-font"></button>
            <button @click="addImg" class="new-note-btn fas fa-image"></button>
            <button @click="addList" class="new-note-btn fas fa-list"></button>
            <button @click="addVideo" class="new-note-btn fab fa-youtube"></button>
            <button @click="addNote" class="new-note-btn fas fa-plus"></button>
           
            </button>
        </div>
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