import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Home from "../home";
import WorkEx from "../workex";
import Projects from "../projects";
import Blog from "../blog";
import Testimonial from "../testimonial";
import Contact from "../contact";

import tabs from "../tabs";

import "./styles.css";

const Bars = () => {
  const [leftVisible, setLeftVisible] = useState(true);
  const [activeTab, setActiveTab] = useState(tabs.HOME);

  const alterLeftVisible = () => {
    if (window.innerWidth > 920) {
      setLeftVisible(true);
    } else {
      setLeftVisible(false);
    }
  };

  const onTabClick = (tab) => {
    setActiveTab(tab);
    if (window.innerWidth > 920) return;
    setLeftVisible(false);
  };

  useEffect(() => {
    alterLeftVisible();
    window.addEventListener("resize", function () {
      alterLeftVisible();
    });
  }, []);

  return (
    <>
      {leftVisible ? (
        <CloseIcon
          className="left-menu-icon"
          onClick={() => setLeftVisible(!leftVisible)}
        />
      ) : (
        <MenuIcon
          className="left-menu-icon"
          onClick={() => setLeftVisible(!leftVisible)}
        />
      )}

      <div className={`left ${leftVisible ? "" : "left-display-none"}`}>
        <nav id="nav-scroll">
          <ul className="navigation">
            {Object.values(tabs).map((tab) => (
              <li
                className={`${activeTab.link === tab.link ? "active" : ""}`}
                onClick={() => onTabClick(tab)}
                key={tab.link}
              >
                <a href={`#${tab.link}`}>{tab.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="right">
        <Home />
        <WorkEx />
        <Projects />
        <Blog />
        <Testimonial />
        <Contact />
      </div>
    </>
  );
};

export default Bars;
