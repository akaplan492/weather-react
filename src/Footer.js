import React from "react";
import "./Footer.css";

export default function Footer() {
  let gitUrl = "https://github.com/akaplan492/Kaplan-SheCodesPlus-Project";
  return (
    <div className="Footer">
      <small>
        <a href={gitUrl}>Open-source code</a> by Alexa Kaplan
      </small>
    </div>
  );
}
