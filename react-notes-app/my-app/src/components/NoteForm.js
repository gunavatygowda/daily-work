import { useState } from "react";

function NoteForm({ addNote }) {
  const [note, setNote] = useState({
    title: "",status: "open", date:""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) return;
    addNote({title: note.title.trim(),status: note.status, date: note.date
    });
    setNote({ title: "", status: "open", date:""});
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
      <label>
        Status
        <input
          type="checkbox"
          checked={note.status === "closed"}
          onChange={(e) =>
            setNote({...note,status: e.target.checked ? "closed" : "open",})
          }
        />
        <input
        type="date"
        value={note.date}
        onChange={(e) =>
            setNote({...note,date:e.target.value})
        }
        />
      </label>
      <button>Add</button>
    </form>
  );
}
export default NoteForm;