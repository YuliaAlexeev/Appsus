import { noteService } from "../../apps/miss-keep/services/keep-service.js";
import noteList from '../../apps/miss-keep/cmps/note-list.cmp.js';
import addNote from '../../apps/miss-keep/cmps/add-note.cmp.js';
import noteFilter from '../../apps/miss-keep/cmps/note-filter.cmp.js';
import { eventBus, EVENT_REMOVE_NOTE, EVENT_SET_NOTE_COLOR, USR_MSG, EVENT_SET_PINNED } from '../services/event-bus-service.js';

export default {
    name: 'keep-app',
    template: `<section>
        <add-note @added="addNote"></add-note>
        <note-filter></note-filter>
        <note-list v-show="notesToShow" :notes="notesToShow"></note-list>
    </section>`,
    data() {
        return {
            notes: noteService.getNotes(),
            newNote: noteService.getEmptyNote(),    
        }
    },
    computed:{
        notesToShow(){
            return this.notes;
        } 
    },
    methods:{
        addNote(newNote){
            console.log('Note added!', newNote)
            noteService.addNewNote(newNote)
        } 
    },
    created(){   
        eventBus.$on(EVENT_REMOVE_NOTE, (noteId) => {
            eventBus.$emit(USR_MSG, 'Note has been removed successfully!');
            noteService.remove(noteId)
        })
        eventBus.$on(EVENT_SET_NOTE_COLOR, (noteId, color) => {
            noteService.setColor(noteId, color) 
        })
        eventBus.$on(EVENT_SET_PINNED, (noteId, isPinned) => {
            noteService.setPinned(noteId, isPinned) 
        })        
    },
    components:{
        noteList,
        addNote,
        noteFilter
    }
}