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
          <News />
        </div>
        <div className="top">
          <h3>lorem</h3>
          <News />
        </div>
        <div className="top">
          <h3>lorem</h3>
          <News />
        </div>
      </div>
      <section className="entertainmentPart2">
        <div className="container">
          <News2 />
          <News2 />
          <News2 />
        </div>
        <div className="container">
          <News2 />
          <News2 />
          <News2 />
        </div>
        <div className="container">
          <News2 />
          <News2 />
          <News2 />
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
      <InFocus />
    </>
  );
};

export default EntertainmentPart2;
