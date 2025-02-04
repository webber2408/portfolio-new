import React, { useState, useEffect } from "react";

import tabs from "../tabs";
import ProfilePhoto from "../../assets/images/profile_photo.png";
import LinkedinIcon from "../../assets/images/linkedin.png";

import "./styles.css";
import Lamp from "../lamp";

const Home = () => {
  const [isLampOn, setIsLampOn] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLampOn(true), 1000);
  }, []);

  return (
    <section className="home-wrapper cm-portfolio-section" id={tabs.HOME.link}>
      <Lamp isOn={isLampOn} onLampClick={() => setIsLampOn(!isLampOn)} />
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
          <h3>Software Engineer @ MathWorks </h3>
          <h5> MS(CS), University at Buffalo</h5>
          <h5> BTech(CS), Jaypee Institute of Information Technology</h5>
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
            href="https://docs.google.com/document/d/12DN5zYskYPzoNQTDsOLeOsghrqVA68DNJtOxVgyNA74/edit?usp=sharing"
            target="_blank"
          >
            View Resume
          </a>
          <a className="button" href="https://learndapp.in" target="_blank">
            LearnDapp.in
          </a>
          {/* <a
            className="button"
            href="https://legacy.rsharma.in/posts/posts.html"
            target="_blank"
          >
            JS Snippets
          </a> */}
          <a className="button" href="https://rasharma.hashnode.dev/" target="_blank">
            Blog | Hashnode
          </a>
          {/* <a
            className="button"
            href="https://legacy.rsharma.in"
            target="_blank"
          >
            Visit rsharma.in (LEGACY)
          </a> */}
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
              frameBorder="0"
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
