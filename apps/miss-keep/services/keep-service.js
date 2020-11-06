import {utilService} from '../../../js/services/util-service.js'
import {storageService} from '../../../js/services/storage-service.js'

const STORAGE_KEY = 'notesDB';

var gNotesData = _createNotes();

function _createNotes(){
    const notes =[];
    notes.push(_createNote('noteTxt', 'full stack me baby!', undefined, undefined, undefined,'#7166f9' ));
    notes.push(_createNote('noteTxt', 'The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.', undefined, undefined, undefined,'#bddaf2' ));
    notes.push(_createNote('noteImg', undefined, 'http://icatcare.org/app/uploads/2020/10/webinars-1-650x500.jpg', undefined, undefined, '#ff6a3b' ));
    notes.push(_createNote('noteVideo', undefined, 'www.youtube.com/watch?v=H-PysSOwxsQ', undefined, undefined, '#ffc7f5' ));
    return notes;
}

function getEmptyNote(){
    return {id: utilService.makeId(), type: 'noteTxt', isPinned: false , info: { txt: '', url: ''}, style: {backgroundColor: '#ffffff'} }
}

function _createNote(type, txt, url, label, todos, backgroundColor = '#ffffff'){
    return {
        id: utilService.makeId(),
        type,
        isPinned: false,
        info: {
            txt,
            url,
            label,
            todos,
            // todos: [
            //     { txt: ''}
            // ]
        },
        style: {
            backgroundColor
        }
    }
}

const gNotes = storageService.loadFromStorage(STORAGE_KEY, gNotesData) ? 
storageService.loadFromStorage(STORAGE_KEY, gNotesData) : gNotesData;
console.log('gNotes', gNotes);


function addNewNote(note){
    gNotes.unshift(_createNote(note.type, note.info.txt, note.info.url, note.info.label, note.info.todos));
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

export const noteService = {
    getNotes,
    getEmptyNote,
    addNewNote,
    remove,
    setColor
}