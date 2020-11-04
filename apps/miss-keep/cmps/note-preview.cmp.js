export default{
    props: ['note'],
    name: 'note-preview',
    template: `<div class="note-preview" @mouseover="showOptions" :style="{ 'background-color': bgColor }"> 
                   <p>isPinned: {{note.isPinned}}</p>
                   <p v-if="note.info.txt">{{note.info.txt}}</p>
                </div>

                <div v-if="options" class="options">
                    <button>Delete</button>
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
        showOptions(){
            console.log('show options')
            this.options = true
        }
    },
    created(){
        this.bgColor = this.note.style.backgroundColor
    }
}