import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Navbar from "./components/Navbar";

function App() {
  const [notes, setNotes] = useState([]);// model
  const addNote = (note) => {
    const newNote = { ...note, id: Date.now() };
    setNotes([...notes, newNote]);
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  }
  return (
    <div>
      <h1>Notes App</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<NoteForm addNote={addNote} />} />
          <Route
            path="/notes"
            element={<NoteList notes={notes} deleteNote={deleteNote} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
