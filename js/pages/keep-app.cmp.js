import { noteService } from "../../apps/miss-keep/services/keep-service.js";
import noteList from '../../apps/miss-keep/cmps/note-list.cmp.js';
import addNote from '../../apps/miss-keep/cmps/add-note.cmp.js';
import { eventBus, EVENT_REMOVE_NOTE, EVENT_SET_NOTE_COLOR } from '../services/event-bus-service.js';


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
        } 
    },
    created(){
        console.log('noteeeeeeeeees', this.notes)
        
        eventBus.$on(EVENT_REMOVE_NOTE, (noteId) => {
        
            noteService.remove(noteId)
            var msg = "removed"
            eventBus.$emit('show-msg', msg)
        })

        eventBus.$on(EVENT_SET_NOTE_COLOR, (noteId, color) => {
            noteService.setColor(noteId, color) 
        })


        // eventBus.$on('show-msg', msg => {
        //     console.log('msg', msg)
        //     this.msg = msg
        // })
        
    },
    components:{
        noteList,
        addNote
    }
}