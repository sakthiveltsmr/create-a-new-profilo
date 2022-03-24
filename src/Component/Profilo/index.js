import React from "react";
import "./Profile.css";
import * as SiIcons from "react-icons/si";
import blog from "../../img/blog.png";
export default function Profile() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">Portfolio</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={blog} alt="..." className="card-image-top" />
        </div>
        <div className="title-heading">
          <h5 className="cart-title">Blog Application</h5>
        </div>
      </div>
    </div>
  );
}
