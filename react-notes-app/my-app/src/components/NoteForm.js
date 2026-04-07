import { useState } from "react";
function NoteForm({ addNote }) {
  const [note, setNote] = useState({
    title: "", content:"",status: "open", priority:0, startDate:"", endDate:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) return;
    addNote({
      title: note.title.trim(),content:note.content.trim(),status: note.status, priority: note.priority,
      startDate:note.startDate, endDate:note.endDate
    });
    setNote({title: "",content:"",status:"open",priority:0, startDate:"",endDate:""});
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
  <div className="form-group">
    <label>Title</label>
    <input
      placeholder="Enter the title" value={note.title}
      onChange={(e) =>setNote({...note,title:e.target.value })}
    />
  </div>
    <div className="form-group">
    <label>Content</label>
    <input
      placeholder="Enter the content" maxLength={40} value={note.content}
      onChange={(e) => setNote({...note,content:e.target.value })}
    />
    {note.content.length >= 40 && (
      <p className="error">Limit exceeded</p>)}
      <p className={note.content.length >= 40 ? "error" : "counter"}>{40 - note.content.length} characters remaining </p>
  </div>

  <div className="form-group checkbox-row">
    <label>Status</label>
    <input
      type="checkbox" checked={note.status === "closed"}
      onChange={(e) =>setNote({...note,status:e.target.checked?"closed":"open"})}
    />
  </div>

  <div className="form-group">
    <label>Priority: {note.priority}</label>
    <input
      type="range" min="0" max="30" value={note.priority}
      onChange={(e) => setNote({...note, priority: e.target.value})}
    />
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Start Date</label>
      <input
        type="date" value={note.startDate}
        onChange={(e) => setNote({...note, startDate: e.target.value})}
      />
    </div>

    <div className="form-group">
      <label>End Date</label>
      <input
        type="date" value={note.endDate}
        onChange={(e) => setNote({...note, endDate: e.target.value})}
      />
    </div>
  </div>
  <button>Add</button>
</form>
  );
}
export default NoteForm;