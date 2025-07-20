import Form from "../components/Form.jsx";
import "../styles/Form.css";

function Register() {
  return (
    <div className="login-register-container">
      <Form route={"/api/user/register/"} method={"register"} />
    </div>
  );
}

export default Register;
