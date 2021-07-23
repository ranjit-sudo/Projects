import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await auth.signInWithEmailAndPassword(email, pass);
      toast(`Welcome ${res.user.email}`);
      history.push("/home");
    } catch (error) {
      toast(error.message);
    }
  };
  const signUp = () => {
    history.push("./signup");
  };

  return (
    <div className="login">
      <h1 className="heading">Welcome to TODO App</h1>
      <h2 className="subHeading">Sign In</h2>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="pass"
          placeholder="Enter Password"
        />
        <button className="btn" type="submit">
          Sign In
        </button>
        <button className="btn" onClick={signUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
