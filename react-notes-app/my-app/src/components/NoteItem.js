function NoteItem({ note, deleteNote }) {
  return (
    <li>
      <span>{note.title}</span>
      <span> {note.status}</span>
      <br></br> 
      <span>{note.date}</span>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </li>
  );
}

export default NoteItem;