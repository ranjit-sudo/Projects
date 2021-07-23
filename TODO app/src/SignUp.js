import React, { useState } from "react";
import "./SignUp.css";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function SignUp() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await auth.createUserWithEmailAndPassword(email, pass);
      toast(`Account Created Successfully! \n Welcome ${res.user.email}`);
      history.push("/home");
    } catch (error) {
      toast(error.message);
    }
  };

  return (
    <div className="signUp">
      <h1 className="heading">Welcome to TODO App</h1>
      <h2 className="subHeading">Sign Up</h2>
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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
