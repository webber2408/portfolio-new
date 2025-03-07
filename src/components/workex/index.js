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
          Software Engineer <span className="colored-text"> @ MathWorks</span>
        </h3>
        <h6>NATICK, MA, USA | FEBRUARY 2023 - PRESENT</h6>
        <br />
        <ul>
            <li>
              Led the migration and enhancement of Simulink mockup in LitElement, improving modularity and maintainability.
            </li>
            <li>
              Spearheaded <b>development and testing of web widgets for Simulink Web</b>, ensuring keyboard and screen reader accessibility (WCAG compliance).
            </li>
            <li>
              Improved menu rendering latency by <b>61% (259 ms → 100 ms)</b> by leading test architecture refactoring 
              and event-driven performance enhancements, scaling impact across <b>20+</b> downstream teams and <b>~200k</b> Simulink Editor Users.
            </li>
          </ul>
        <br />
        <br />
        <h3>
          Software Engineer - Frontend Intern{" "}
          <span className="colored-text"> @ Tatari Inc.</span>
        </h3>
        <h6>SAN FRANCISCO, CA, USA | JUNE 2022 - AUGUST 2022</h6>
        <br />
        <ul>
          <li>Developed a Multi-Week Dashboard using React.js, Context API, and Redux, thus enhancing data visualization.</li>
          <li>
              Optimized bundle size <b>(60% reduction)</b> and first contentful paint <a href="https://eng.tatari.tv/engineering/2022/08/15/fe-optimizations-at-tatari.html" target="_blank">(80% improvement, 2.5s → 0.5s)</a>, 
              boosting user experience.
          </li>
          <li> 
            <a href="https://www.linkedin.com/posts/rahul2408_frontend-optimizations-at-tatari-activity-6969343962201346048-Dgqo?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAByFr6cBY62uAabFr2OpYbD6v_LApEEgD4A" target="_blank">Received recognition from leadership</a> for performance improvements.
          </li>
        </ul>
        <br />
        <br />
        <h3>
          Software Engineer - FrontEnd{" "}
          <span className="colored-text"> @ Squareboat</span>
        </h3>
        <h6>GURUGRAM, INDIA | OCTOBER 2020 - JULY 2021</h6>
        <br />
        <ul>
          <li>
            Worked on central user and product state management, heavily involved in developing reusable web components in React. 
            Mentored FE team on following best practices while creating scalable web components & led hiring process for Full Stack Roles.
          </li>
        </ul>
        <br />
        <br />
        <h3>
          Software Engineer - FrontEnd{" "}
          <span className="colored-text"> @ Fundwave</span>
        </h3>
        <h6>NEW DELHI, INDIA | FEBRUARY 2019 - MARCH 2020</h6>
        <br />
        <ul>
          <li>
            Redesigned the Transaction Flow and built an Investment Summary Dashboard for tracking investments.
          </li>
          <li>
            Implemented a Bank Reconciliation System for bulk transaction imports and <b>improved PWA caching strategies.</b>
          </li>
          <li>
            Delivered tech talks on MongoDB, <a href="https://medium.com/@everythingwebber/react-vs-lit-step-by-step-guide-e2bc24cc40d4">React.js vs Lit.js</a>, and Redux vs Redux-Toolkit.
          </li>
        </ul>
        <br />
        <br />
        <h3>
          Information Technology Trainee{" "}
          <span className="colored-text"> @ NTPC Limited</span>
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
