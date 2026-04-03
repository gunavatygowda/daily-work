import {useState} from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import './App.css';

function App() {
  const [ notes, setNotes]= useState([]); //model
  const addNote=(note) => {
    const newNote = { ...note, id: Date.now() };
    setNotes([...notes,newNote]);
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };
  return (
<div className="app-container">
<h1>Notes App</h1>
<NoteForm addNote={addNote} />
<NoteList notes={notes} deleteNote={deleteNote} />
</div>
  );
}
export default App;
 