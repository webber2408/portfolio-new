import React from "react";

import tabs from "../tabs";

import BlockchainArchitectureThumbnail from "../../assets/images/blog_blockchain_architecture.png";
import BlockchainNeedThumbnail from "../../assets/images/blog_blockchain_need.png";

import "./styles.css";

const Blog = () => {
  return (
    <section className="blog-wrapper cm-portfolio-section" id={tabs.BLOG.link}>
      <h2>Latest from the blog</h2>
      <p className="sub-title">Learn Decentralized Application Programming</p>
      <div className="blog-content-wrapper">
        <h3>Blockchain Architecture | By Rahul Sharma</h3>
        <h6 onClick={() => (window.location.href = "https://learndapp.in")}>
          learndapp.in
        </h6>
        <br />
        <img src={BlockchainArchitectureThumbnail} />
        <br />
        <p>
          As seen above, in the blockchain (list of blocks), every block
          starting from the head block (a.k.a genesis block) is linked with the
          next block using a pointer. Hence, every block should have some space
          to save the details of the next block, isn't it? so that the list
          grows. This tells us that a block does not only store transaction
          details but also stores some other information too (regarding its
          structure?)
        </p>
        <a
          className="button"
          href="https://www.learndapp.in/docs/blockchain_architecture"
          target="_blank"
        >
          Read more on LearnDapp
        </a>
        <br />
        <br />
        <br />
        <br />
        <h3>Need of Blockchain | By Rahul Sharma</h3>
        <h6 onClick={() => (window.location.href = "https://learndapp.in")}>
          learndapp.in
        </h6>
        <br />
        <img src={BlockchainNeedThumbnail} />
        <br />
        <p>
          Imagine if you wanted to transfer some funds to your friend. Ideally,
          you would initiate the transaction and would wait for the bank to
          verify the amount, deduct it from your account and credit it to your
          friend's account. Isn't it? <br /> But what if one day, your bank
          fails!? It is not a usual case, but there are possibilities of such
          happening. <br /> What if I tell you that there is no need for you to
          check up on the bank servers, whether they are down or up? <br /> What
          if there is no need to pay fixed transaction fees on your transfer?
          What if you have the power to choose your transaction fees? How
          amazing would that be?
        </p>
        <a
          className="button"
          href="https://www.learndapp.in/docs/why_do_we_need_blockchain"
          target="_blank"
        >
          Read more on LearnDapp
        </a>
      </div>
      <div className="separator-line"></div>
    </section>
  );
};

export default Blog;
