export default {
    template: `
    <div class="add-note">
        <input type="text" v-model="input" :placeholder="placeholder" />
        <div class="add-note-btns">
            <button @click="setType('noteTxt')" class="note-btn add-note-btn fas fa-font"></button> 
            <button @click="setType('noteImg')" class="note-btn add-note-btn fas fa-image"></button> 
            <button @click="setType('noteTodo')" class="note-btn add-note-btn fas fa-list"></button>
            <button @click="setType('noteVideo')" class="note-btn add-note-btn fab fa-youtube"></button>
            <button @click="setType('noteAudio')" class="note-btn add-note-btn fas fa-volume-up"></button>
            <button @click="emitAddNote" class="note-btn add-note-btn fas fa-plus"></button>
        </div>  
    </div>
    `,
    data() {
        return {
            input: '',
            newNote: {
                type: 'noteTxt',
                isPinned: false,
                info: {
                    txt: '',
                    url: '',
                    todos: []
                },
            },
        };
    },
    computed: {
        placeholder() {
            let type = this.newNote.type;
            let typeResults = {
                noteTxt: 'Type here...',
                noteImg: 'Enter image url',
                noteTodo: 'Enter the following format: todo,todo,todo',
                noteVideo: 'Enter YouTube url',
                noteAudio: 'Enter audio url',
            };
            return typeResults[type];
        },
    },
    methods: {
        setType(type) {
            this.newNote.type = type;
        },
        emitAddNote() {
            if (this.input != '') {
                if (this.newNote.type === 'noteTxt') {
                    this.newNote.info.txt = this.input;
                } else if (this.newNote.type === 'noteImg') {
                    this.newNote.info.url = this.input;
                } else if (this.newNote.type === 'noteTodo') {
                    let todoItems = this.input.split(',');
                    todoItems.forEach(todoItem => {
                        this.newNote.info.todos.push({ txt: todoItem, isDone: false })
                    })
                } else if (this.newNote.type === 'noteVideo') {
                    this.newNote.info.url = this.input;
                } else if (this.newNote.type === 'noteAudio') {
                    this.newNote.info.url = this.input;
                }
                this.$emit('added', JSON.parse(JSON.stringify(this.newNote)));
                this.input = '';
            }
        },
    },
};
