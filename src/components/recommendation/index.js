import React from "react";

import tabs from "../tabs";

import "./styles.css";

const Recommendation = () => {
  return (
    <section
      className="recommendation-wrapper cm-portfolio-section"
      id={tabs.RECOMMENDATION.link}
    >
      <h2>Recommendations</h2>
      <p className="sub-title"></p>
      <div className="recommendation-content-wrapper">
        <blockquote>
          <p>
            Through Rahul's presentations and reports, I closely observed his
            communication and and organizational skills, which were excellent.
            He has a good academic record which attributes to his
            insightfulness, his keen learning attitude and bold resolution to
            achieve goals.
          </p>
          <div className="author">Dr. Anuja Arora, Associate Professor</div>
          <div className="author">
            Jaypee Institute of Information Technology, Noida
          </div>
        </blockquote>
        <br />
        <blockquote>
          <p>
            Rahul is a consistent and meticulous learner who played an active
            role in the classroom. He was attentive and quick to grasp complex
            concepts. His openness to deepen his knowledge through conversation
            and debate was delightful as we often delved into engaging
            discussions on different matters.
          </p>
          <div className="author">Dr. Parmeet Kaur, Associate Professor</div>
          <div className="author">
            Jaypee Institute of Information Technology, Noida
          </div>
        </blockquote>
        <br />
        <blockquote>
          <p>
            I have closely worked with Rahul on several tech projects and I must
            acknowledge him for his quick pace of learning and delivering
            anything which he has picked. A quick learner, reliable and
            easy-going guy to work with.
          </p>
          <div className="author">Sunil Kumar, Co-founder & CTO</div>
          <div className="author">WUElev8</div>
        </blockquote>
        <br />
        <blockquote>
          <p>
            Rahul & I have been working together for INBadlav ( A non-profit
            organization). It has always been great working with him. His
            hands-on approach to problem solving, out-of-the-box thinking and
            diligent attitude has helped INBadlav grow at a fast
          </p>
          <div className="author">Parimal Mishra, Product Success</div>
          <div className="author">Sprinkler</div>
        </blockquote>
      </div>
      <div className="separator-line"></div>
    </section>
  );
};

export default Recommendation;
