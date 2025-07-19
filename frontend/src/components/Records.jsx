import "../styles/Note.css";

function Records({ record, onDelete }) {
  return (
    <div className="note-container">
      <h3 className="note-artist">{record.title}</h3>
      <p className="note-artist">{record.artist}</p>
      <p className="note-listened">{record.listened}</p>
      <p className="note-listened">{record.listened_at}</p>
      <p className="note-listened">{record.opinion}</p>
      <button className="delete-button" onClick={() => onDelete(record.id)}>
        Delete
      </button>
    </div>
  );
}

export default Records;
