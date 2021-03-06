import {utilService} from '../../../js/services/util-service.js'
import {storageService} from '../../../js/services/storage-service.js'

const STORAGE_KEY = 'notesDB';

var gNotesData = _createNotes();

function _createNotes(){
    const notes =[];
    notes.push(_createNote('noteImg', true, undefined, 'https://media3.giphy.com/media/L0NvsV1pBDRCcVQBGY/giphy.gif?cid=ecf05e47pdmfe1uk7cx0jrc67x7iyhij1hoki2be62cl0imo&rid=giphy.gif', undefined,undefined, '#660033' ));
    notes.push(_createNote('noteTxt', false, 'full stack me baby!', undefined, undefined, undefined,'#7166f9' ));
    notes.push(_createNote('noteImg', false, undefined, 'https://www.meissl.com/media/images/8f24db1f/schweiz.jpg', undefined ));
    notes.push(_createNote('noteTxt', true, 'The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.', undefined, undefined,undefined,'#bddaf2' ));
    notes.push(_createNote('noteImg', false, undefined, 'https://icatcare.org/app/uploads/2020/10/webinars-1-650x500.jpg', undefined,undefined, '#FF0366' ));
    notes.push(_createNote('noteImg', false, undefined, 'https://media.giphy.com/media/xULW8PLGQwyZNaw68U/giphy.gif', undefined,undefined, '#e6ffb3' ));
    notes.push(_createNote('noteAudio', false, undefined, 'https://www.bensound.com/bensound-music/bensound-theelevatorbossanova.mp3', undefined,undefined, '#02bf4f' ));
    notes.push(_createNote('noteVideo', false, undefined, 'https://www.youtube.com/watch?v=H-PysSOwxsQ&', undefined,undefined, '#aaaaaa' ));
    notes.push(_createNote('noteTodo', true, undefined, undefined, undefined, [{ txt: 'Eat', isDone: false }, { txt: 'Sleep', isDone: false }, { txt: 'Code', isDone: true }, { txt: 'Repeat', isDone: true } ] , '#ffb3b3' ));
    notes.push(_createNote('noteImg', false, undefined, 'https://media3.giphy.com/media/r4qCKeiUQdppS/giphy.gif', undefined,undefined, '#cccc00' ));
    notes.push(_createNote('noteTodo', false, undefined, undefined, undefined, [{ txt: 'Smiley :)', isDone: true }, { txt: 'Think positive', isDone: true }, { txt: 'Love', isDone: true }, { txt: 'Be happy', isDone: true }, { txt: 'Laugh often', isDone: true }, { txt: 'Help someone (othen than myself)', isDone: true }, { txt: 'Have some fun', isDone: true } ] , '#00ffff' ));
    return notes;
}

function getEmptyNote(){
    return {id: utilService.makeId(), type: 'noteTxt', isPinned: false , info: { txt: '', url: ''}, style: {backgroundColor: '#ffffff'} }
}

function _createNote(type, isPinned, txt, url, label, todos, backgroundColor = '#ffffff'){
    return {
        id: utilService.makeId(),
        type,
        isPinned,
        info: {
            txt,
            url,
            label,
            todos
        },
        style: {
            backgroundColor
        }
    }
}

const gNotes = storageService.loadFromStorage(STORAGE_KEY, gNotesData) ? 
storageService.loadFromStorage(STORAGE_KEY, gNotesData) : gNotesData;

function addNewNote(note){
    gNotes.unshift(_createNote(note.type, note.isPinned, note.info.txt, note.info.url, note.info.label, note.info.todos));
    storageService.storeToStorage(STORAGE_KEY, gNotes);
}

function getNotes(){
    return gNotes;
}

function getNoteIdxById(noteId){
    const idx = gNotes.findIndex(note => note.id === noteId);
    return idx;
}

function remove(noteId){
    const idx = getNoteIdxById(noteId);
    gNotes.splice(idx, 1);
    storageService.storeToStorage(STORAGE_KEY, gNotes);
}

function setColor(noteId, color){
    const idx = getNoteIdxById(noteId);
    gNotes[idx].style.backgroundColor = color;
    storageService.storeToStorage(STORAGE_KEY, gNotes);
}

function setPinned(noteId, isPinned){
    const idx = getNoteIdxById(noteId);
    gNotes[idx].isPinned = isPinned;
    storageService.storeToStorage(STORAGE_KEY, gNotes);
}

function updateNoteTodos(noteId, todoId){
    const idx = getNoteIdxById(noteId);
    let note = gNotes[idx];
    let todo = note.info.todos[todoId]
    let isDone = todo.isDone
    todo.isDone = !isDone;
    storageService.storeToStorage(STORAGE_KEY, gNotes);
}

export const noteService = {
    getNotes,
    getEmptyNote,
    addNewNote,
    remove,
    setColor,
    setPinned,
    updateNoteTodos
}