import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperation from "../redux/auth/auth-operations";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperation.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Enter</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          {" "}
          EMAIL
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          PASSWORD
          <input
            type="password"
            name="password"
            required
            pattern=".{8,}"
            title="Password must be at least 8 digits"
            value={email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Registration</button>
      </form>
    </div>
  );
}
