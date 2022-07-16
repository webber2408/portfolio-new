import React from "react";

import tabs from "../tabs";

import "./styles.css";

const Education = () => {
  return (
    <section
      className="education-wrapper cm-portfolio-section"
      id={tabs.EDUCATION.link}
    >
      <h2>Education</h2>
      <p className="sub-title"></p>
      <div className="education-content-wrapper">
        <h3>
          Masters in Computer Science
          <br />
          <span className="colored-text">
            State University of New York at Buffalo
          </span>
        </h3>
        <h6>BUFFALO, NY | AUGUST 2021 - DECEMBER 2022 (ANTICIPATED)</h6>
        <br />
        <br />
        <h3>
          Bachelors in Computer Science Engineering (Honors)
          <br />
          <span className="colored-text">
            Jaypee Institute of Information Technology
          </span>
        </h3>
        <h6>NEW DELHI, INDIA | FEBRUARY 2019 - MARCH 2020</h6>
        <br />
      </div>
      <div className="separator-line"></div>
    </section>
  );
};

export default Education;
