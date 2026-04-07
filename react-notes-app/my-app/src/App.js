import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Navbar from "./components/Navbar";
import "./App.css";
import StatusBarChart from "./components/StatusBarChart";


function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  const addNote = (note) => {
    const newNote = { ...note, id: Date.now() };
    setNotes([...notes, newNote]);
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  let filterNotes = notes.filter((note) =>
  note.title.toLowerCase().includes(search.toLowerCase())
);
if (sortType === "name") {
  filterNotes.sort((a, b) => a.title.localeCompare(b.title));
}
if (sortType === "priority") {
  filterNotes.sort((a, b) => a.priority - b.priority);
}
  return (
    <Router>
      <div className="app-container">
        <h1 className="app-title"> Notes App</h1>
        <Navbar />
        <div className="card">
          <Routes>
            <Route path="/" element={<NoteForm addNote={addNote} />} />
       <Route
       path="/notes"
       element={ <>
      <NoteList
        notes={filterNotes} deleteNote={deleteNote} search={search}
        setSearch={setSearch} setSortType={setSortType}
      />
      <StatusBarChart notes={notes} />  
    </>
  }
/>
</Routes></div>
</div> </Router>
  );
}
export default App;