const service = require('../services/notesService')

exports.getAllNotes = async (request, response) =>{
    const notes = await service.getNotes();

    response.json(notes);
    // console.log(request.method);
    // console.log(request.headers);
}

exports.getNoteById = async (req, res) => {
    const note = await service.getNoteById(req.params.id);

    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }

    res.json(note);
};