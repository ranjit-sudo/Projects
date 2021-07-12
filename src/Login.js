import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://discord.com/assets/ff41b628a47ef3141164bfedb04fb220.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
