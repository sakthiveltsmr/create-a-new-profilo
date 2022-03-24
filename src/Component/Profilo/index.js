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
            <div className="tech_used">
              <i className="fab fa-react react"></i> &nbsp;
              <i className="fab fa-node node"></i> &nbsp;
              <SiIcons.SiMongodb className="mongodb" /> &nbsp;
              <p className="codeLinks text-center pt-3">
                <a
                  className="bth btn-sm btn-success ml-3"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sakthiveltsmr/full-stack-blog"
                >
                  Frontend <i className="fab fa-github"></i>
                </a>
                <a
                  className="bth btn-sm btn-success ml-3"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sakthiveltsmr/Node-Blog"
                >
                  Backend <i className="fab fa-github"></i>
                </a>
                <a
                  className="bth btn-sm btn-success ml-3"
                  target="_blank"
                  rel="noreferrer"
                  href="https://muthu-blog-application.netlify.app/"
                >
                  Website <i className="fad fa-link"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
