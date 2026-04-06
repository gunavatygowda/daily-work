import { useEffect, useState } from "react";
import NoteItem from "./NoteItem";
import { Link } from "react-router-dom";

function NoteList({ notes, deleteNote }) {
  const [note, setNote] = useState([]);
  const handleDelete = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this note?"
  );

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