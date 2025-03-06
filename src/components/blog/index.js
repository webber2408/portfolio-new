import React from "react";

import tabs from "../tabs";
import data from "./data.json";


import "./styles.css";

const Blog = () => {
  return (
    <section className="blog-wrapper cm-portfolio-section" id={tabs.BLOG.link}>
      <h2>Latest from the blog</h2>
      <p className="sub-title"></p>
      <div className="blog-content-wrapper">
        {
          data?.blogs?.map((blog, index) => {
            return (
              <div className="blog" key={index}>
                <h3>{blog?.title}</h3>
                <h6 onClick={() => (window.location.href = `${blog.subLink}`)}>
                  {blog.subText}
                </h6>
                <br />
                <img src={`/images/blog/${blog?.img}`}/>
                <br />
                <p dangerouslySetInnerHTML={{ __html: blog.description }} />
                <a
                  className="button"
                  href={`${blog.blogLink}`}
                  target="_blank"
                >
                  {blog.blogLinkText}
                </a>
              </div>
            )
          })
        }
      </div>
      <div className="separator-line"></div>
    </section>
  );
};

export default Blog;
