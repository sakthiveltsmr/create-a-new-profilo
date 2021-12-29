import React from "react";
import Typical from "react-typical";
import Resume from "../../img/Resume.pdf.pdf";
import "./Home.css";

export default function Home() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello,I'm <strong className="highlighted-text">Sakthivel</strong>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={["Web Developer", 1000, "Full Stack Developer", 1000]}
                />
              </h1>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me{""}</button>
            <a href={Resume} download={Resume}>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
