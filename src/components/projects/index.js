import React from "react";

import tabs from "../tabs";

import "./styles.css";

const Projects = () => {
  return (
    <section
      className="projects-wrapper cm-portfolio-section"
      id={tabs.PROJECTS.link}
    >
      <h2>PROJECTS</h2>
      <p className="sub-title">Some of the things that I have worked on!</p>
      <div className="projects-content-wrapper">
        <h3>
          FrontChain (FT Marketplace){" "}
          <span className="colored-text"> *under Blockchain Applications</span>
        </h3>
        <h6>University at Buffalo (CSE 526) | FEBRUARY 2022 - MAY 2022</h6>
        <br />
        <p>
          Built FT marketplace to buy/sell reusable FrontEnd Components using
          technologies, Solidity, Web3.0, React.js, Node.js, Truffle, Infura,
          Metamask. <br />
          Under <b>Phase-1</b>, worked on designing Smart Contract and
          integrating Web3.0 along with React & Truffle to connect to underlying
          functions in deployed SC on Ganache (Local Blockchain)..
          <br />
          In <b>Phase-2</b>, moved transactions within FrontChain to use custom
          ERC20 Token - FrontCoin along with Airdrop feature & deployment on
          Ropsten.
        </p>
        <a
          className="button"
          href="https://drive.google.com/file/d/1wJiTosbotDeTF-J6CldSuKOKIl706l7c/view?usp=sharing"
          target="_blank"
        >
          View Report (Phase-1)
        </a>
        <a
          className="button"
          href="https://drive.google.com/file/d/1wH1tVILQ0oJZF90JyaldWOd-aGEQ_i62/view?usp=sharing"
          target="_blank"
        >
          View Demo (Phase-1)
        </a>
        <br />
        <a
          className="button"
          href="https://drive.google.com/file/d/13NX_a1ddGY1PEwd2kIbRTbMYbw1Guvzt/view?usp=sharing"
          target="_blank"
        >
          View Report (Phase-2)
        </a>
        <a
          className="button"
          href="https://drive.google.com/file/d/13NSpd1tqjHzIo2QbVS4sB2cOJITOQX9O/view?usp=sharing"
          target="_blank"
        >
          View Demo (Phase-2)
        </a>
        <div className="github-actions">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=webber2408&repo=FrontChain&type=star"
            frameBorder="0"
            scrolling="0"
            width="150"
            height="20"
            title="GitHub"
          ></iframe>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=webber2408&repo=FrontChain&type=fork"
            frameBorder="0"
            scrolling="0"
            width="150"
            height="20"
            title="GitHub"
          ></iframe>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h3>
          Cricket Information System (Decentralized PubSub){" "}
          <span className="colored-text"> *under Distributed Systems</span>
        </h3>
        <h6>University at Buffalo (CSE 586) | AUGUST 2021 - DECEMBER 2021</h6>
        <br />
        <p>
          Built 2 decentralized Publisher/Subscriber applications using
          technologies, Kafka, React.js, Node.js, MongoDB, WebSTOMP, Socket.io &
          RabbitMQ Message Queue.
          <br />
          Under <b>Phase-1</b>, created 3 decentralized publishers interacting
          with 3 brokers to publish and (N) consumers consuming resources.
          Broker communication was achieved using Message Rendezvous and message
          passing was achieved via RabbitMQ.
          <br />
          In <b>Phase-2</b>, converted all 3 broker nodes in Phase-1 to Kafka
          Broker Nodes and implemented Kafka Consumers to interact with broker
          nodes.
        </p>
        <a
          className="button"
          href="https://drive.google.com/file/d/1I_Bn2W5h2TFHwvYwk1j4tCU29cDbk0dc/view?usp=sharing"
          target="_blank"
        >
          View Report (Phase-1)
        </a>
        <br />
        <a
          className="button"
          href="https://drive.google.com/file/d/10IA5WqacDvT-IQjRpCEGSdn2qo4eDR1-/view?usp=sharing"
          target="_blank"
        >
          View Report (Phase-2)
        </a>
        <a
          className="button"
          href="https://drive.google.com/file/d/10GoG1iiu6uxl2hHo_oTjwzPejQD6URlt/view?usp=sharing"
          target="_blank"
        >
          View Demo (Phase-2)
        </a>
        <div className="github-actions">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=webber2408&repo=CricketInfo&type=star"
            frameBorder="0"
            scrolling="0"
            width="150"
            height="20"
            title="GitHub"
          ></iframe>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=webber2408&repo=CricketInfo&type=fork"
            frameBorder="0"
            scrolling="0"
            width="150"
            height="20"
            title="GitHub"
          ></iframe>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h3>
          Just JSON Formatter{" "}
          <span className="colored-text">*Weekend Project</span>
        </h3>
        <h6>JULY 2021</h6>
        <br />
        <p>
          Worked on JSON formatter to validate and display JSON in
          expandable/collapsible tree format using Javascript.
        </p>
        <a
          className="button"
          href="https://json-formatter-henna.vercel.app/"
          target="_blank"
        >
          Live Demo
        </a>
        <div className="github-actions">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=webber2408&repo=JSONFormatter&type=star"
            frameBorder="0"
            scrolling="0"
            width="150"
            height="20"
            title="GitHub"
          ></iframe>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=webber2408&repo=JSONFormatter&type=fork"
            frameBorder="0"
            scrolling="0"
            width="150"
            height="20"
            title="GitHub"
          ></iframe>
        </div>
        <br />
        <br />
      </div>
      <div className="separator-line"></div>
    </section>
  );
};

export default Projects;
