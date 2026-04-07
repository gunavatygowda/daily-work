function NoteList({ notes, deleteNote, search, setSearch, setSortType}) {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (confirmDelete) {deleteNote(id);}
  };
  return (
  <div>
    <input
      type="text" placeholder="Search by title" value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ marginBottom: "10px", padding: "8px", width: "100%" }}
    />

    <select
    onChange={(e) => setSortType(e.target.value)} style={{ marginBottom: "10px", padding: "8px" }}>
      <option value="">Sort By</option>
      <option value="name">Name</option>
      <option value="priority">Priority</option>
      </select>
    {(!notes || notes.length === 0) ? (
      <p>No notes available</p>
    ) : (<table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead><tr>
            <th>ID</th> <th>Title</th> <th>Content</th>
            <th>Status</th> <th>Priority</th>
            <th>Start Date</th> <th>End Date</th>
            <th>Actions</th>
          </tr></thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td>{note.id}</td> <td>{note.title}</td> <td>{note.content}</td>
              <td>{note.status}</td> <td>{note.priority}</td> <td>{note.startDate}</td> <td>{note.endDate}</td>
              <td> <button onClick={() => handleDelete(note.id)}>Delete</button> </td>
            </tr>
          ))}
        </tbody></table>
    )}
  </div>
);
}
export default NoteList;