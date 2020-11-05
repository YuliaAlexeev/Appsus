import {utilService} from '../../../js/services/util-service.js'
import {storageService} from '../../../js/services/storage-service.js'

const STORAGE_KEY = 'notesDB';

var gNotesData = _createNotes();

function _createNotes(){
    const notes =[];
    notes.push(_createNote('noteTxt', 'full stack me baby!', undefined, '#7166f9' ));
    notes.push(_createNote('noteTxt', 'Drink wine', undefined, '#bddaf2' ));
    notes.push(_createNote('noteImg', undefined, 'https://icatcare.org/app/uploads/2020/10/webinars-1-650x500.jpg' ));
    return notes;
}

function getEmptyNote(){
    return {id: utilService.makeId(), type: 'noteTxt', isPinned: false , info: { txt: '', url: ''}, style: {backgroundColor: '#ffffff'} }
}

function _createNote(type, txt, url, backgroundColor = '#ffffff'){
    return {
        id: utilService.makeId(),
        type,
        isPinned: false,
        info: {
            txt,
            url
        },
        style: {
            backgroundColor
        }
    }
}

const gNotes = storageService.loadFromStorage(STORAGE_KEY, gNotesData) ? 
storageService.loadFromStorage(STORAGE_KEY, gNotesData) : gNotesData;
console.log('gNotes', gNotes)


function addNewNote(note){
    console.log('gNotes', gNotes)
    gNotes.unshift(_createNote(note.type, note.info.txt, note.info.url))
    console.log('gNotes', gNotes)
    storageService.storeToStorage(STORAGE_KEY, gNotes)


}

function getNotes(){
    return gNotes;
}

// function notesInfo(){
//     return gNotes.info;
// }

export const noteService = {
    getNotes,
    getEmptyNote,
    addNewNote,
    // notesInfo
}