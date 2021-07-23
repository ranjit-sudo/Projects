import React from "react";
import "./LandingPage.css";
import { useHistory } from "react-router-dom";
function LandingPage() {
  const history = useHistory();
  const navigate = () => {
    history.push("/login");
  };
  return (
    <div className="landingPage">
      <h1>The TODO list to organize work & life</h1>
      <button onClick={navigate}>GET STARTED</button>
    </div>
  );
}

export default LandingPage;
