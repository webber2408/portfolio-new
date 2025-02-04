import React from "react";

import tabs from "../tabs";

import BlockchainArchitectureThumbnail from "../../assets/images/blog_blockchain_architecture.png";
import BlockchainNeedThumbnail from "../../assets/images/blog_blockchain_need.png";
import TatariBlogThumbnail from "../../assets/images/blog_tatari.png";
import Oop1 from "../../assets/images/oop1.png";
import Oop2 from "../../assets/images/oop2.png";
import Oop3 from "../../assets/images/oop3.png";

import "./styles.css";

const Blog = () => {
  return (
    <section className="blog-wrapper cm-portfolio-section" id={tabs.BLOG.link}>
      <h2>Latest from the blog</h2>
      <p className="sub-title">Learn Decentralized Application Programming</p>
      <div className="blog-content-wrapper">
        <h3>Frontend Optimizations @ Tatari | By Rahul Sharma</h3>
        <h6
          onClick={() =>
            (window.location.href =
              "https://eng.tatari.tv/engineering/2022/08/15/fe-optimizations-at-tatari.html")
          }
        >
          https://eng.tatari.tv/
        </h6>
        <br />
        <img src={TatariBlogThumbnail} />
        <br />
        <p>
          With a growing frontend codebase incorporating various external
          libraries, we noticed an increase in our bundle sizes and build times.
          This alarming trend (along with the subpar Lighthouse rating of 49,
          attached below) led us to undertake a project focused on a series of
          frontend enhancements and optimizations, which we will cover in this
          blog.
        </p>
        <a
          className="button"
          href="https://eng.tatari.tv/engineering/2022/08/15/fe-optimizations-at-tatari.html"
          target="_blank"
        >
          Read more
        </a>
        <br />
        <br />
        <br />
        <br />
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
        <br />
        <br />
        <br />
        <br />
        <h3>Object-Oriented Programming (Part I) | By Rahul Sharma</h3>
        <h6 onClick={() => (window.location.href = "https://rasharma.hashnode.dev")}>
          rasharma.hashnode.dev
        </h6>
        <br />
        <img src={Oop1} />
        <br />
        <p>
          We have been battling with learning Object-Oriented Programming from
          various resources, be it textbooks, online materials, videos, and so
          on. We somehow grasp the concept, but when it comes to the interview,
          we are stuck with one simple yet unanswerable question. <br />
          “How will I revise my OOP concept now? I definitely can’t go through
          all of my previous resources!”
        </p>
        <a
          className="button"
          href="https://rasharma.hashnode.dev/object-oriented-programming-c-the-easy-way-part-i"
          target="_blank"
        >
          Read more on Hashnode
        </a>
        <br />
        <br />
        <br />
        <br />
        <h3>Object-Oriented Programming (Part II) | By Rahul Sharma</h3>
        <h6 onClick={() => (window.location.href = "https://rasharma.hashnode.dev")}>
          rasharma.hashnode.dev
        </h6>
        <br />
        <img src={Oop2} />
        <br />
        <p>
          What’s up fellas? This what you see is the second part of my
          Object-Oriented Programming concepts series. I would be covering some
          interesting stuff including Copy Constructors, Friend functions,
          Structs and many more.
          <br />
          Did you know that we could copy our constructors?
          <br />
          If we go by the literal definition, a Copy Constructor simply means an
          overloaded constructor used to declare and initialize an object of a
          particular class from another object of the same class.
        </p>
        <a
          className="button"
          href="https://rasharma.hashnode.dev/object-oriented-programming-c-the-easy-way-part-ii"
          target="_blank"
        >
          Read more on Hashnode
        </a>
        <br />
        <br />
        <br />
        <br />
        <h3>Object-Oriented Programming (Part III) | By Rahul Sharma</h3>
        <h6 onClick={() => (window.location.href = "https://rasharma.hashnode.dev")}>
          rasharma.hashnode.dev
        </h6>
        <br />
        <img src={Oop3} />
        <br />
        <p>
          We need inheritance because no one wants to redo/reimplement a
          function that has already been implemented! I mean who would want
          that?
          <br />
          Reusability is one of the most important features of Inheritance. It
          is not always about doing extra work but the already done work might
          have also been tested well for any bugs and you obviously don’t want
          to go through that painful cycle again! Hence, just Reuse.
        </p>
        <a
          className="button"
          href="https://rasharma.hashnode.dev/object-oriented-programming-c-inheritance-or-the-easy-way-part-iii"
          target="_blank"
        >
          Read more on Hashnode
        </a>
      </div>
      <div className="separator-line"></div>
    </section>
  );
};

export default Blog;
