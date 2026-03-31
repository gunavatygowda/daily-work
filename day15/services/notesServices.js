const fs = require('fs').promises;

async function getNotes() {
    const data = await fs.readFile('./data/notes.json', 'utf-8');
    return JSON.parse(data);
}

async function getNoteById(id) {
    const notes = await getNotes();
    return notes.find(note => note.id === Number(id)); // 👈 FIX (important)
}

module.exports = { getNotes, getNoteById };