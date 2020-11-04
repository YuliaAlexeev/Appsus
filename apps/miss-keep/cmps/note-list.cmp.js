import notePreview from './note-preview.cmp.js';
export default {
    props: ['notes'],
    template: `
        <div class="notes">
            <h2>Note List:</h2>
            <div class="notes-list">
                <note-preview v-for="currNote in notes" :key="currNote.id" :note="currNote"></note-preview>
            </div>
        </div>
    `,
    components: {
        notePreview
    }
}