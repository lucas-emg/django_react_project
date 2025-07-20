import { useState, useEffect } from "react";
import api from "../api";
import Records from "../components/Records";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [records, setRecords] = useState([]);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getRecords();
  }, []);

  const getRecords = async () => {
    await api
      .get("/api/records/")
      .then((res) => res.data)
      .then((data) => {
        setRecords(data.reverse());
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/records/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note was deleted!");
        else alert("Failed to delete");
        getRecords();
      })
      .catch((err) => alert(err));
  };

  const addRecord = (e) => {
    e.preventDefault();
    api
      .post("/api/records/", { artist, title })
      .then((res) => {
        if (res.status === 201) alert("Note created.");
        else alert("Error while creating note");
        getRecords();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <nav className="top-nav">
        <button className="logout-button" onClick={() => navigate("/logout")}>
          Logout
        </button>
        <img src="./logo_main.png" />
      </nav>
      <div
        style={{ padding: "100px", boxSizing: "border-box", maxWidth: "100%" }}
      >
        <h2>Add a record</h2>
        <form onSubmit={addRecord}>
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

          <label htmlFor="content">Artist:</label>
          <br />
          <input
            type="text"
            id="content"
            name="content"
            required
            onChange={(e) => setArtist(e.target.value)}
            value={artist}
          />
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>

      <div>
        {records.length > 0 ? (
          records.map((record) => (
            <Records record={record} onDelete={deleteNote} key={record.id} />
          ))
        ) : (
          <p>No records found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
