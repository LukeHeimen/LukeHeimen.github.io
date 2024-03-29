import React from "react";

import Intro from "@containers/intro/Intro";
import NavBar from "@components/navbar/NavBar";

import "./app.scss";

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <div>
        <ul>
          About here
          <li>Short desc</li>
          <li>What I do outside work</li>
        </ul>
      </div>
      <div>
        <ul>
          Techs used here
          <li>Highlight each one with a popup of its logo</li>
        </ul>
      </div>
      <div>Sample projects here</div>
      <div>
        <ul>
          Other links here
          <li>GitHub</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div>
        <ul>
          Contact here
          <li>Add different modes of contact</li>
          <li>Add download resume or cv perhaps</li>
        </ul>
      </div>
      <div>
        Footer here <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
