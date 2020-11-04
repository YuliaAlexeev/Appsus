import {utilService} from '../../../js/services/util-service.js'
import {storageService} from '../../../js/services/storage-service.js'

const STORAGE_KEY = 'notesDB';

var gNotesData = [
    {
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "full stack me baby!"
        },
        style: {
            backgroundColor: "pink"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
]

const gNotes = storageService.loadFromStorage(STORAGE_KEY, gNotesData) ? 
storageService.loadFromStorage(STORAGE_KEY, gNotesData) : gNotesData;

function getEmptyNote(){
    return {id: utilService.makeId() , isPinned: false , info: { txt: ''} }
}

function addNewNote(note){
    gNotes.push(note)
    storageService.storeToStorage(STORAGE_KEY, gNotes)
}

function getNotes(){
    console.log(gNotes, 'gNotes')
    return gNotes;
}

export const noteService = {
    getNotes,
    getEmptyNote,
    addNewNote
}