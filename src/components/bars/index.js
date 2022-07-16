import React, { useEffect, useState, Suspense } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import tabs from "../tabs";

import "./styles.css";

const Recommendation = React.lazy(() =>
  import(/*webpackChunkName: "recommendation"*/ "../recommendation")
);
const Blog = React.lazy(() => import(/*webpackChunkName: "blog"*/ "../blog"));
const Projects = React.lazy(() =>
  import(/*webpackChunkName: "projects"*/ "../projects")
);
const WorkEx = React.lazy(() =>
  import(/*webpackChunkName: "workex"*/ "../workex")
);
const Home = React.lazy(() => import(/*webpackChunkName: "home"*/ "../home"));
const Education = React.lazy(() =>
  import(/*webpackChunkName: "education"*/ "../education")
);

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
        <Suspense fallback={<div>Loading</div>}>
          <Home />
          <Blog />
          <WorkEx />
          <Projects />
          <Education />
          <Recommendation />
        </Suspense>
      </div>
    </>
  );
};

export default Bars;
