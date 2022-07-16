import React from "react";

import tabs from "../tabs";
import ProfilePhoto from "../../assets/images/profile_photo.png";
import LinkedinIcon from "../../assets/images/linkedin.png";

import "./styles.css";

const Home = () => {
  return (
    <section className="home-wrapper cm-portfolio-section" id={tabs.HOME.link}>
      <h2>RAHUL SHARMA</h2>
      <p className="sub-title">Software Engineer & JS ♥'er</p>
      <div className="about-wrapper">
        <div className="about-img">
          <img
            className="portrait"
            src={ProfilePhoto}
            alt="image"
            draggable="false"
            width={"171px"}
            height={"224px"}
          />
        </div>

        <div className="about-text">
          <h3>Software Engineer - FE Intern @ Tatari </h3>
          <h5> MS(CS), University at Buffalo</h5>

          <p>
            A Software Engineer by profession and an eager learner from the
            heart. <br /> My introduction to the Computer Science field was made
            during my inquisitive childhood years, where I was curious to
            understand how my favorite 'fly-on click helicopter ' game worked!
            Ever since then, I dreamt of diving deep into this field and here I
            am building scalable and optimized web portals.
          </p>

          <a
            className="button"
            href="https://pdfhost.io/v/J6.cD1qj._Resume_Rahul_Sharma"
            target="_blank"
          >
            View Resume
          </a>
          <a className="button" href="https://learndapp.in" target="_blank">
            LearnDapp.in
          </a>
          <a
            className="button"
            href="https://legacy.rsharma.in/posts/posts.html"
            target="_blank"
          >
            JS Snippets
          </a>
          <a className="button" href="https://blog.rsharma.in/" target="_blank">
            Blog | Hashnode
          </a>
          <a
            className="button"
            href="https://legacy.rsharma.in"
            target="_blank"
          >
            Visit rsharma.in (LEGACY)
          </a>
          <div className="social-wrapper">
            <img
              src={LinkedinIcon}
              width={20}
              height={20}
              onClick={() => {
                window.location.href = "https://www.linkedin.com/in/rahul2408/";
              }}
            />
            <iframe
              src="https://ghbtns.com/github-btn.html?user=webber2408&type=follow&count=true"
              frameborder="0"
              scrolling="0"
              width="170"
              height="20"
              title="GitHub"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="separator-line"></div>
    </section>
  );
};

export default Home;
