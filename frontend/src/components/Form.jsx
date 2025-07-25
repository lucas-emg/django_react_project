import { useState } from "react";
import api from "../api.js";
import { useNavigate, Link } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants.js";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator.jsx";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={"form-container"}>
      <img src="../logo_main.png" />
      <input
        className={"form-input"}
        type={"text"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder={"username"}
      />
      <input
        className={"form-input"}
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"password"}
      />
      {loading && <LoadingIndicator />}
      <button className={"form-button"} type={"submit"}>
        {name}
      </button>

      {method == "login" ? (
        <div>
          <p>
            Not registered yet?{" "}
            <Link to={"/register/"} className="form-container-link">
              Sign up here!
            </Link>
          </p>
        </div>
      ) : (
        <div>
          <p>
            Already a member?{" "}
            <Link to={"/login/"} className="form-container-link">
              Log in here!
            </Link>
          </p>
        </div>
      )}
    </form>
  );
}

export default Form;
