import React from "react";
import emailIcon from "../assets/icons/envelope-solid.svg";
import "../index.css";

export default function Button() {
  return (
    <div className="btn-container">
      <a className="email-btn" href="mailto:bnielsencodes@gmail.com">
        <img className="email-icon" src={emailIcon} alt="email icon" />
        Email
      </a>
    </div>
  );
}
