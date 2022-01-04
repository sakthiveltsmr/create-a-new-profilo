import React from "react";
import "./index.css";
import ProgressBar from "@ramonak/react-progress-bar";
function Skills() {
  return (
    <div className="skillsWrapper" id="skills">
      <h1 className="logo-text text-center py-md-5 py-xs-5">Skills</h1>
      <div className="row">
        <div className="col-md-6 col-sm-12" data-aos="flip-left">
          <div className="skillName">
            <p>React</p>
            <ProgressBar
              completed={85}
              backgroundColor="#01bf71"
              height="15px"
              isLableVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
          <div className="skillName">
            <p>JavaScript</p>
            <ProgressBar
              completed={80}
              backgroundColor="#01bf71"
              height="15px"
              isLableVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
          <div className="skillName">
            <p>CSS</p>
            <ProgressBar
              completed={90}
              backgroundColor="#01bf71"
              height="15px"
              isLableVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
          <div className="skillName">
            <p>HTML</p>
            <ProgressBar
              completed={90}
              backgroundColor="#01bf71"
              height="15px"
              isLableVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
