import Form from "../components/Form.jsx";
import "../styles/Form.css";

function Login() {
  return (
    <div className="login-register-container">
      <Form route={"/api/token/"} method={"login"} />
    </div>
  );
}

export default Login;
