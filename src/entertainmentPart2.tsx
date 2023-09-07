import React from "react";
import "./EntertaimentPart2.scss";
import News2 from "./News2";
import News from "./news";
import InFocus from "./infocus";
import Bulletin from "./bulletin";
const EntertainmentPart2: React.FC = () => {
  return (
    <>
      <div className="spotlight">
        <div className="top">
          <h3>lorem</h3>
          <News text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        </div>
        <div className="top">
          <h3>lorem</h3>
          <News text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        </div>
        <div className="top">
          <h3>lorem</h3>
          <News text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        </div>
      </div>
      <section className="entertainmentPart2">
        <div className="container">
        <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        </div>
        <div className="container">
        <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        </div>
        <div className="container">
        <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        </div>
      </section>
      <section className="horizontalContainer">
        <div className="verticalContainer">
          <h3>lorem</h3>
          <div className="someLines">
            <Bulletin />
          </div>
        </div>
        <div className="verticalContainer">
          <h3>lorem</h3>
          <div className="someLines">
            <Bulletin />
          </div>
        </div>
        <div className="verticalContainer">
          <h3>lorem</h3>
          <div className="someLines">
            <Bulletin />
          </div>
        </div>
      </section>
      <InFocus inFocusItems1="inFocusItems" inFocusItems2="inFocusItems" inFocusItems3="inFocusItems" inFocusItems4="inFocusItems" inFocusItems5="inFocusItems" inFocusItems6={null} inFocusItems7={null} />
    </>
  );
};

export default EntertainmentPart2;
