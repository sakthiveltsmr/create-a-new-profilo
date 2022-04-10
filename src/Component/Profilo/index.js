import React from "react";
import "./Profile.css";
import * as SiIcons from "react-icons/si";

import car from "../../img/car.png";
import pizza from "../../img/screen.png";
import Bike from "../../img/bike.png";

function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">My Projects</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={pizza} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Pizza Application</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Pizza Beast</div>
            <div className="img-description">
              <p>
                Users can filter available foods using filter option based on
                the category (Veg or non-veg).{" "}
              </p>
              <p>
                Implemented this application with complete authentication system
                along with varoius roles(Admin,Client)
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
                    href="https://github.com/sakthiveltsmr/React-Pizza-Front-End"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sakthiveltsmr/Pizza-back-end-using-Nodejs"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://sakthi-pizza-beast.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img
            src="https://res.cloudinary.com/krishcloudstorage/image/upload/v1629096055/dev_setups/fxn61y48w5zfurvfoewa.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="title_heading">
            <h5 className="card-title">Blog Application</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">BlogPost</div>
            <div className="img-description">
              <p>
                {" "}
                Blog Application where the user can read, post, edit or delete
                articles. Edit and delete can only be performed by the
                respective article owner. Also, post can be categorized based on
                the tags or author
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
                    href="https://sakthi-blog-app.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={Bike} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Bike service Application</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">SK SERVICE</div>
            <div className="img-description">
              <p>
                {" "}
                This Bike service application is done with complete
                authentication system and various features like booking, payment
                etc.This app has secured validation for Login and Registration
                authentication.Users can add new Booking Services their Cart,
                and also Delete the Booking Services on Cart.Users can Check out
                Booking Services with its Details.
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
                    href="https://github.com/sakthiveltsmr/Bike-Service-React"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sakthiveltsmr/Bike-Service-Nodejs"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://sk-service-sakthi.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={car} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Car Showroom Application</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">SKWheels</div>
            <div className="img-description">
              <p>
                {" "}
                Application system follows complete authentication for login and
                forget password authentication Otherwise user can directly login
                using to the google email.User can view the fully responsive
                mobiles and systems in this application and User can see the
                various new model cars and services.
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
                    href="https://github.com/sakthiveltsmr/cars-shop"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://car-shop-sakthi.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
