import React from "react";
import "./Projects.css";
function Projects() {
  return (
    <div className="projects">
      <h1 className="heading">Projects</h1>
      <div className="container">
        <div className="card1">
          <div className="inner">
            <h2>Discord Clone</h2>
            <span>
              Projects Discord-Messaging-Clone Jul 2021 Project description
              Discord Messaging App with real-time chatting experience.
            </span>
            <span>
              <a href="https://discord-clone-b4857.web.app/">Visit Site</a>
            </span>
          </div>
        </div>

        <div className="card2">
          <div className="inner">
            <h2>Quizz App</h2>
            <span>Very simple quiz app...</span>
            <span>
              <a href="https://quiz-mr-ranj.netlify.app/">Visit Site</a>
            </span>
          </div>
        </div>

        <div className="card3">
          <div className="inner">
            <h2>Restaurant Menu</h2>
            <span>
              A Simple menu for different dishes and display according to their
              category.
            </span>
            <span>
              <a href="https://menu-mr-ranj.netlify.app/">Visit Site</a>
            </span>
          </div>
        </div>

        <div className="card4">
          <div className="inner">
            <h2>Card Generator</h2>
            <span>
              Simple Card Generator made using JavaScript, HTML and CSS.
            </span>
            <span>
              <a href="https://card-generator-mr-ranj.netlify.app/">
                Visit Site
              </a>
            </span>
          </div>
        </div>

        <div className="card5">
          <div className="inner">
            <h2>TODO app</h2>
            <span>
              Created a TODO App to keep a track of day to day activities with
              backend as firebase.
            </span>
            <span>
              <a href="https://todo-42eeb.web.app/">Visit Site</a>
            </span>
          </div>
        </div>

        <div className="card6">
          <div className="inner">
            <h2>Tour Page</h2>
            <span>
              Made a very basic tour app using react that displays different
              places for tourists...
            </span>
            <span>
              <a href="https://tour-mr-ranj.netlify.app/">Visit Site</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
