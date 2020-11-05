export default{
    props: ['note'],
    name: 'note-preview',
    template: `<div class="note-preview" @mouseover="options=true" @mouseleave="options=false" :style="{ 'background-color': bgColor }"> 
                   <p>isPinned: {{note.isPinned}}</p>
                   <p v-if="note.info.txt">{{note.info.txt}}</p>

                   <div v-show="options" class="options">
                        <button @click="emitRemove(currNote.id)">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    
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
        console.log('id', this.note.id)
        this.bgColor = this.note.style.backgroundColor
       
    }
}