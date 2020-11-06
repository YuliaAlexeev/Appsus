export default{
    props: ['note'],
    name: 'note-todo',
    template: `<ul><li><p>{{note.info.todos}}</p></li></ul>`,
}