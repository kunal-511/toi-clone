import React from "react";
import "./VisualStories.scss";
import Title from "./title";
import img from "./assets/news.png";
const VisualStories: React.FC = () => {
  return (
    <div className="VStories">
      <Title
        titleItem1={"lorem1"}
        titleItem2={"lorem2"}
        titleItem3={"lorem3"}
        titleItem4={"lorem4"}
        cityHead={false}
        titleHeading="Visual Stories"
      />
      <div className="flex">
        <div className="stories">
          <img src={img} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="stories">
          <img src={img} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="stories">
          <img src={img} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="stories">
          <img src={img} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default VisualStories;
