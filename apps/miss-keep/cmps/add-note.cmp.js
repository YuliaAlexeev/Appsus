export default {
    template: `
    <div class="new-note">
        <input type="text" v-model="input" :placeholder="placeholder" />
            <button @click="setType('noteTxt')" class="new-note-btn fas fa-font"></button> 
            <button @click="setType('noteImg')" class="new-note-btn fas fa-image"></button> 
            <button @click="setType('noteTodo')" class="new-note-btn fas fa-list"></button>
            <button @click="setType('noteVideo')" class="new-note-btn fab fa-youtube"></button>
            <button @click="emitAddNote" class="new-note-btn fas fa-plus"></button>
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
                    todos: '',
                    // todos: [
                    //     {
                    //         txt: 'Do this',
                    //     },
                    //     {
                    //         txt: 'Do that',
                    //     },
                    // ],
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
                    this.newNote.info.todos = this.input;
                } else if (this.newNote.type === 'noteVideo') {
                    this.newNote.info.url = this.input;
                }
                this.$emit('added', JSON.parse(JSON.stringify(this.newNote)));
                this.input = '';
            }
        },
    },
};
