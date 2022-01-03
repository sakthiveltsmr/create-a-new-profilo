import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h1 className="logo-text">Contact</h1>
      <div className="mail-contact mb-5">
        <h4 className="px-2">Having an project idea in mind?</h4>
        <a
          href="mailto:sakthiveltsmr@gmail.com"
          rel="noreferrer"
          className="btn btn-sm btn-success"
        >
          Let's Discuss
        </a>
      </div>
      <div className="mail-contact mb-5">
        <div className="contacts p-4 text-center">
          <i className="fad fa-envelope"></i>{" "}
          <span>sakthiveltsmr@gmail.com</span>
        </div>
        <div className="contacts p-4 text-center">
          <i className="fad fa-mobile-alt"></i> <span>+91 8525899106</span>
        </div>
        <div className="contacts p-4 text-center mb-3">
          <i className="fad fa-map-marker-alt"></i>{" "}
          <span>Namakkal,TamilNadu</span>
        </div>
      </div>
      <div className="footer mt-3">
        <span className="float-left">
          <a
            href="https://github.com/sakthiveltsmr"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <i className="fab fa-github"></i>
          </a>
          &emsp;
          <a
            href="https://www.linkedin.com/in/sakthivel-r-442969171/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          &emsp;
        </span>
        <span>Copyright © 2022.</span>
        <span>All Rights Reserved by Sakthivel R</span>
      </div>
    </div>
  );
}
export default Contact;
