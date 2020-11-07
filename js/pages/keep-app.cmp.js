import { noteService } from "../../apps/miss-keep/services/keep-service.js";
import noteList from '../../apps/miss-keep/cmps/note-list.cmp.js';
import addNote from '../../apps/miss-keep/cmps/add-note.cmp.js';
import noteFilter from '../../apps/miss-keep/cmps/note-filter.cmp.js';
import { eventBus, EVENT_REMOVE_NOTE, EVENT_SET_NOTE_COLOR, USR_MSG, EVENT_SET_PINNED } from '../services/event-bus-service.js';

export default {
    name: 'keep-app',
    template: `<section>
        <add-note @added="addNote"></add-note>
        <note-filter @filtered="setFilter"></note-filter>
        <note-list v-show="notesToShow" :notes="notesToShow"></note-list>
    </section>`,
    data() {
        return {
            filterBy: {byTxt: '', byType: ''},
            notes: noteService.getNotes(),
            newNote: noteService.getEmptyNote(),    
        }
    },
    computed:{
        notesToShow(){
            //return this.notes;
            if(this.filterBy.byType === '') {
                if(this.filterBy.byTxt === '') return this.notes;
                const txt= this.filterBy.byTxt.toLowerCase();
                return this.notes.filter(note => 
                    note.type === 'noteTxt' && 
                    note.info.txt.toLowerCase().includes(txt))
            };
            return this.notes.filter(note => note.type === this.filterBy.byType)
        } 
    },
    methods:{
        addNote(newNote){
            console.log('Note added!', newNote)
            noteService.addNewNote(newNote)
        },
        setFilter(filterBy){
            this.filterBy = filterBy;
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