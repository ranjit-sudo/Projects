import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="head">
        <h1>Personal Info</h1>
        <h3>Get To know about me</h3>
      </div>
      <div className="contain">
        <div className="left">
          <h3>Hello ! </h3>
          <span>
            My name is Ranjit Chauhan and I am a passtionate Front-End Web
            Developer using web technologies to build amazing products and
            focussing on solving problems for differnt niches and different
            industries using power o technology.
            <br />
            <br />I will love to hear from you. Whether it's a project, job,
            opportunity, or just a chat.Feel free to contact me.
          </span>
        </div>
        <div className="right">
          <h2>Skills</h2>
          <button>C++</button>
          <button>HTML</button>
          <button>CSS</button>
          <button>JavaScript</button>
          <button>Java</button>
          <button>React</button>
          <button>FireBase</button>
        </div>
      </div>
    </div>
  );
}

export default About;
