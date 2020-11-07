export default{
    props: ['note'],
    name: 'note-todo',
    template: `<ul class="note-todo-list clear-list">
                    <li class="note-todo-list-item" v-for="(todo,idx) in note.info.todos">
                        <label :for="todo.id" @click="emitTodoStatus(idx)">
                            <input :id="todo.id" type="checkbox" >
                            {{todo.txt}}
                        </label>
                    </li>
                </ul>`,
    methods:{
        emitTodoStatus(todoId){
            this.isDone = !this.isDone;
            console.log(todoId, 'todoId', this.isDone)
            //eventBus.$emit(EVENT_SET_DONE, noteId, this.isDone)
        }
    }
}