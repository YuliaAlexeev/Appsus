import { noteService } from "../../apps/miss-keep/services/keep-service.js";
import noteList from '../../apps/miss-keep/cmps/note-list.cmp.js';

import addNote from '../../apps/miss-keep/cmps/add-note.cmp.js';

export default {
    name: 'keep-app',
    template: `<section>
        <add-note @added="addNote"></add-note>
        <note-list v-show="notesToShow" :notes="notesToShow"></note-list>
    </section>`,
    data() {
        return {
            // txt: '',
            notes: noteService.getNotes(),
            newNote: noteService.getEmptyNote(),
           
            // noteInfo: noteService.getNoteInfo()
           
        }
    },
    computed:{
        notesToShow(){
            return this.notes;
        },
        notesInfo(){
            return this.notes.info;
        }
        
    },
    methods:{
        addNote(newNote){
            console.log('Note added!', newNote)
            noteService.addNewNote(newNote)
        }, 
 
            
    },
    created(){
        console.log('noteeeeeeeeees', this.notes)
    },
    components:{
        noteList,
        addNote


    }
}