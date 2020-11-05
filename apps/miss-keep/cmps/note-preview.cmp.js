import noteImg from './note-img.cmp.js';
import noteTxt from './note-txt.cmp.js';

export default{
    props: ['note'],
    name: 'note-preview',
    template: `<div class="note-preview" @mouseover="options=true" @mouseleave="options=false" :style="{ 'background-color': bgColor }"> 
                   <!-- <p v-if="note.info.txt">{{note.info.txt}}</p> -->
                   <component :is="note.type" :note="note" />

                   <div v-show="options" class="options">
                        <button @click="emitRemove(note.id)" class="fas fa-trash-alt"></button>
                        <button class="note-preview-pin fas fa-thumbtack"></button>
                    </div>
                </div>  
    `,
    data(){
        return{
            // bgColor: 'pink'
            bgColor: null,
            options: false
        }
    },
    methods:{
        emitRemove(noteId) {
            console.log('OK', noteId);
            this.$emit('remove', noteId)
        },
    },
    created(){
        // console.log('id', this.note.id)
        
        // if(this.note.style.backgroundColor != undefined){

        // }
        this.bgColor = this.note.style.backgroundColor
    },
    components: {
        noteImg,
        noteTxt
    }
}