import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote }) {
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this note?");
        if (confirmDelete) {
            deleteNote(id);
  }
};
     return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} deleteNote={handleDelete} />
      ))}
    </ul>
  );
}
export default NoteList;