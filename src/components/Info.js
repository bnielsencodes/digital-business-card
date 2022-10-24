import React from "react";
import Button from "../components/Button";
import profilePic from "../assets/images/ben-sweet-unsplash.jpg";
import "../index.css";

export default function Info() {
  return (
    <div className="info">
      <img
        className="profile-pic"
        src={profilePic}
        alt="man in black beanie cap"
      />
      <div className="info-bottom">
        <h1>Brandon Nielsen</h1>
        <h4>Front-End Web Developer</h4>
        <a href="https://bnielsen.dev" target="_blank">
          <small>bnielsen.dev</small>
        </a>
        <Button />
      </div>
    </div>
  );
}
