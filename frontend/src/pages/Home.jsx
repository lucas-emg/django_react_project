import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Notes";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data.reverse());
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note was deleted!");
        else alert("Failed to delete");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Note created.");
        else alert("Error while creating note");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <nav className="top-nav">
        <h1>To Do App</h1>
        <button className="logout-button" onClick={() => navigate("/logout")}>
          Logout
        </button>
      </nav>
      <div
        style={{ padding: "100px", boxSizing: "border-box", maxWidth: "100%" }}
      >
        <h2>Create a note</h2>
        <form onSubmit={createNote}>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />

          <label htmlFor="content">Content:</label>
          <br />
          <input
            type="text"
            id="content"
            name="content"
            required
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>

      <div>
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
