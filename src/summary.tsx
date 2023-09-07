import React from "react";
import "./Summary.scss";
import Blogs from "./blogs";
const Summary: React.FC = () => {
  return (
    <section className="summary">
      <div className="summaryRow">
        <Blogs blogsHeading="Blogs" />
        <Blogs blogsHeading="NRI" />
        <Blogs blogsHeading="Women" />

        <Blogs blogsHeading="Science" />
        <Blogs blogsHeading="Astrology" />
        <Blogs blogsHeading="obituaries" />
      </div>
      <div className="summaryRow">
        <Blogs blogsHeading="Real Estate" />
        <Blogs blogsHeading="Environment" />
        <Blogs blogsHeading="Trending" />

        <Blogs blogsHeading="Sunday Times" />
        <Blogs blogsHeading="Tech" />
        <Blogs blogsHeading="Good News" />
      </div>
    </section>
  );
};

export default Summary;
