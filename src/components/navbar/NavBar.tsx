import React from "react";

import "./navbar.scss";

export default function NavBar() {
  return (
    <nav className="navigation" role="navigation">
      <span>Intro</span>
      <span>About</span>
      <span>Skills</span>
      <span>Projects</span>
      <span>Contact</span>
    </nav>
  );
}
