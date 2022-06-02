import "./footer.css";
import React from "react";
import { BsMouse } from "react-icons/bs";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>

    </div>
  );
}

export default Footer;