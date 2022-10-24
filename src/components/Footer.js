import React from "react";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/square-github.svg";
import twitterIcon from "../assets/icons/square-twitter.svg";
import "../index.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <a href="https://linkedin.com/in/bnielsencodes" target="_blank">
          <img src={linkedinIcon} alt="LinkedIn icon" />
        </a>
        <a href="https://github.com/bnielsencodes" target="_blank">
          <img src={githubIcon} alt="GitHub icon" />
        </a>
        <a href="https://twitter.com/bnielsencodes" target="_blank">
          <img className="twitter" src={twitterIcon} alt="Twitter icon" />
        </a>
      </div>
    </div>
  );
}
