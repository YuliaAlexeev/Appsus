import noteImg from './note-img.cmp.js';
import noteTxt from './note-txt.cmp.js';
import noteTodo from './note-todo.cmp.js';
import noteVideo from './note-video.cmp.js';
import { eventBus, EVENT_REMOVE_NOTE, EVENT_SET_NOTE_COLOR } from '../../../js/services/event-bus-service.js';

export default{
    props: ['note'],
    name: 'note-preview',
    template: `<transition name="bounce"><div class="note-preview" @mouseover="controls=true" @mouseleave="controls=false" :style="{ 'background-color': bgColor }"> 
                   <component :is="note.type" :note="note" />
                   <transition name="fade">
                   <div v-show="controls" class="controls">
                        <button @click="emitRemove(note.id)" class="fas fa-trash-alt"></button>
                        <!-- <input type="color" :value="bgColor" v-model="pickColor"/> -->
                        <label class="controls-color-label">
                            <input type="color" v-model="pickColor"  @change="emitColor(note.id)"/> 
                            <i class="fas fa-palette"></i>
                        </label>
                        <button class="note-preview-pin fas fa-thumbtack"></button>
                    </div>
                    </transition>
                </div>  
                </transition>`,
    data(){
        return{
            bgColor: null,
            controls: false,
            pickColor: this.note.style.backgroundColor,
        }
    },
    methods:{
        emitRemove(noteId) {
            //  eventBus.$emit('show-msg', 'Removed!');
            eventBus.$emit(EVENT_REMOVE_NOTE, noteId, 'show-msg')
        },
        emitColor(noteId){
            this.bgColor = this.pickColor;
            eventBus.$emit(EVENT_SET_NOTE_COLOR, noteId, this.pickColor)
        }
    },

    created(){
        //console.log('id', this.note.id)
        this.bgColor = this.note.style.backgroundColor
    },
    components: {
        noteImg,
        noteTxt,
        noteTodo,
        noteVideo
    }
}