import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperation from "../redux/auth/auth-operations";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
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
    dispatch(authOperation.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          {" "}
          NAME
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            value={name}
            onChange={handleChange}
          />
        </label>
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
