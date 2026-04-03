import axios from "axios";
import { useState } from "react";

function NoteForm({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    content: "",  
    status: "open"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim() || !note.content.trim()) return;
    sendPostRequest(note);
    addNote({
      title: note.title.trim(),
      content: note.content.trim(),
      status: note.status,
    });
    setNote({ title: "", content: "", status: "open" });
  };
  const sendPostRequest = (note) => {
    axios.post("http://localhost:3000/notes", note, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter title"
        value={note.title}
        onChange={(e) =>
          setNote({ ...note, title: e.target.value })
        }
      />
      <input
        placeholder="Enter content"
        value={note.content}
        onChange={(e) =>
          setNote({ ...note, content: e.target.value })
        }
      />
      <label>Status
        <input
          type="checkbox"
          checked={note.status === "closed"}
          onChange={(e) =>
            setNote({
              ...note,
              status: e.target.checked ? "closed" : "open",
            })
          }
        />
      </label>
      <button>Add</button>
    </form>
  );
}

export default NoteForm;