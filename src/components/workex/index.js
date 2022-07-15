import React from "react";

import tabs from "../tabs";

import "./styles.css";

const WorkEx = () => {
  return (
    <section
      className="workex-wrapper cm-portfolio-section"
      id={tabs.WORKEX.link}
    >
      <h2>Work Experience</h2>
      <p className="sub-title"></p>
      <div className="workex-content-wrapper">
        <h3>
          Software Engineer - Frontend Intern{" "}
          <span className="colored-company"> @ Tatari Inc.</span>
        </h3>
        <h6>SAN FRANCISCO, USA | JULY 2022 - PRESENT</h6>
        <br />
        <p>
          Tackling the migration from a single planner dashboard to multiweek
          dashboard <br />
          Working on overall web optimization incorporating code-splitting
          within the app using Webpack splitchunks and React.lazy()
          <br />
          Recomissioned Version Notifier using Webpack to notifiy users of any
          new updates pushed to the app
          <br />
          Working on improving the overall build process and reducing the time
          taken by the same by analyzing/researching through MVP various
          propsects of various bundlers involving Webpack, Vite, Rollup, etc.
        </p>
        <br />
        <br />
        <h3>
          Software Engineer (L1) - Full Stack{" "}
          <span className="colored-company"> @ Squareboat</span>
        </h3>
        <h6>GURUGRAM, INDIA | OCTOBER 2020 - JULY 2021</h6>
        <br />
        <p>
          Developed consumable APIs using Nest.js & reusable web components/user
          dashboards using React.js and Next.js.
          <br />
          Mentored Front-End team on efficient use of React.js to create
          scalable components.
          <br />
          Led hiring process for Front-End & Full Stack Roles.
        </p>
        <br />
        <br />
        <h3>
          Software Engineer - Full Stack{" "}
          <span className="colored-company"> @ Fundwave</span>
        </h3>
        <h6>NEW DELHI, INDIA | FEBRUARY 2019 - MARCH 2020</h6>
        <br />
        <p>
          Collaborated with fellow developers to revamp existing Transaction
          Flow, develop Investment Summary Dashboard to track and visualize
          investments. Implemented Bank Reconciliation System to bulk import
          transactions. <br />
          Improved overall WebApp performance by implementing it as a
          Progressive Web App (PWA) and used improved caching strategies for
          assets & APIs.
          <br />
          Delivered brown-bag sessions & tech talk on MongoDB, React.js Vs
          Angular.js.
          <br />
          Working on improving the overall build process and reducing the time
          taken by the same by analyzing/researching through MVP various
          propsects of various bundlers involving Webpack, Vite, Rollup, etc.
        </p>
        <br />
        <br />
        <h3>
          Information Technology Trainee{" "}
          <span className="colored-company"> @ NTPC Limited</span>
        </h3>
        <h6>NOIDA, INDIA | JUNE 2018 - JULY 2018</h6>
        <br />
        <p>
          Implemented Powerplant Protocol Portal using PHP, MySQL & Javascript;
          Digitized trivial paper-driven protocol process and got appreciated by
          a Letter of Recommendation from acting AGM NTPC.
        </p>
      </div>
      <div className="separator-line"></div>
    </section>
  );
};

export default WorkEx;
