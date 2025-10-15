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
      <h1 className="login-header">Please, Login</h1>
      <label htmlFor="username">Username</label>
      <br />
      <input
        type="text"
        name="username"
        placeholder="e.g Retric Spike"
        onChange={(e) => setValues(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" name="password" />
      <br />
      <button className="login">
        <Link to="/landingpage">Login</Link>
      </button>
    </>
  );
};

export default Login;
