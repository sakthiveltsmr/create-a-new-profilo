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
        <div className="card-img-overlay">
          <div className="img-title">PostBlog</div>
          <div className="img-description">
            <p>
              {" "}
              Blog Application where the user can read, post, edit or delete
              articles. Edit and delete can only be performed by the respective
              article owner. Also, post can be categorized based on the tags or
              author
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
