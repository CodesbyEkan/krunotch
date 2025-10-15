// import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "./components/MyContext";
import { Link } from "react-router-dom";
import "./App.css";

const Login = () => {
  let { setValues } = useContext(MyContext);

  //   const UserContext = createContext();

  return (
    <>
      <h1 className="login-header">Login page</h1>
      <label for="username">Username:</label>
      <br />
      <input
        type="text"
        name="username"
        placeholder="e.g Retric Spike"
        onChange={(e) => setValues(e.target.value)}
      />
      <br />
      <label for="password">Password</label>
      <br />
      <input type="password" name="password" />
      <br />
      <Link to="/landingpage">
        <button>Login</button>
      </Link>
    </>
  );
};

export default Login;
