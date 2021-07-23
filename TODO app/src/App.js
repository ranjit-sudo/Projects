import React, { useState, useEffect } from "react";
import "./App.css";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import LandingPage from "./LandingPage";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/home">
            <Home user={user} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
