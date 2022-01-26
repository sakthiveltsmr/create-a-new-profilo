import React from "react";
import Typical from "react-typical";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeP,
} from "./HomeElement";
import video from "../../img/Video.mp4";
function HeroSection() {
  return (
    <HomeContainer id="home">
      <HomeBg>
        {/* <VideoBg loop autoPlay>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBg> */}
        {/* <VideoBg autoPlay loop muted src={video} type="video/mp4" /> */}
      </HomeBg>
      <HomeContent>
        <HomeH1>Sakthivel R</HomeH1>
        <HomeP>
          I'm a passionate {""}
          <span
            style={{
              fontWeight: "bold",
              fontFamily: "cursive",
              color: "#20DC1A",
            }}
          >
            <Typical
              loop={Infinity}
              steps={["Web Developer", 1000, "Full Stack Developer", 2000]}
            />
          </span>{" "}
          {""}
        </HomeP>
        <span className="float-left">
          <a
            href="https://github.com/sakthiveltsmr"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-info btn-circle"
          >
            <i className="fab fa-github"></i>
          </a>
          &emsp;
          <a
            href="https://www.linkedin.com/in/sakthivel-r-442969171/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary btn-circle"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          &emsp;
        </span>
      </HomeContent>
    </HomeContainer>
  );
}
export default HeroSection;
