import React from "react";

import github from "../Media/github.png";
import linkedIn from "../Media/linkedIn.png";
import home from "../Media/home.png";

function Footer() {
  return (
    <div className="footer">
      <a href="https://jkmagnussen.com/">
        <img
          className="home"
          src={home}
          alt="home"
          style={{
            width: 100,
            height: 100,
            padding: 20
          }}
        />
      </a>
      <a href="https://github.com/jkmagnussen/MyReads-A-Book-Tracking-App">
        <img
          className="github"
          src={github}
          alt="github"
          style={{
            width: 100,
            height: 100,
            padding: 20
          }}
        />
      </a>

      <a href="https://linkedin.com/in/joseph-magnussen/">
        <img
          className="linkedIn"
          src={linkedIn}
          alt="linkedIn"
          style={{
            width: 100,
            height: 100,
            padding: 20
          }}
        />
      </a>
    </div>
  );
}

export default Footer;
