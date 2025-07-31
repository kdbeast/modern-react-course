const Note = ({ note, deleteNote }) => {
  return (
    <div
      key={note.id}
      className={`border-l-4 border-${
        note.priority === "High"
          ? "red"
          : note.priority === "Medium"
          ? "yellow"
          : "green"
      }-500 p-4 rounded-lg shadow-md bg-white`}
    >
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-gray-600 text-sm">
        <strong>Category: </strong> {note.category}
      </p>
      <p className="text-gray-600 text-sm">
        <strong>Priority: </strong> {note.priority}
      </p>
      <p className="mt-2">{note.description}</p>

      <button
        onClick={() => deleteNote(note.id)}
        className="mt-3 text-red-500 cursor-pointer transition hover:text-red-600"
      >
        🗑️ Delete
      </button>
    </div>
  );
};

export default Note;
