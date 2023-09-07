import React from "react";
import "./City.scss";
import img from "./assets/news.png";
import Bulletin from "./bulletin";
import InFocus from "./infocus";
import Advertisement from "./advertisment";
import Row from "./row";
import News from "./news";
import Title from "./title";

interface CityProps {}
const City: React.FC<CityProps> = () => {
  return (
    <>
      <section className="city">
        <Title titleHeading="Delhi" cityHead={true} titleItem1={null} titleItem2={null} titleItem3={null} titleItem4={null} />
        <section className="content">
          <div className="part1">
            <div className="row1">
              <img src={img} alt="" />
              <div className="bulletin">
                <Bulletin />
              </div>
            </div>
            <div className="row2">
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <span className="vertical-line"></span>
              <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <span className="vertical-line"></span>
              <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <span className="vertical-line"></span>
              <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
            </div>
          </div>
          <span className="vertical-line2"></span>

          <div className="part2">
            <Advertisement />
          </div>
        </section>
      </section>
      <InFocus
        inFocusItems1="G20 summit in delhi"
        inFocusItems2="udhayanidhi stalin"
        inFocusItems3="delhi g20 summit"
        inFocusItems4="hyderabad rains"
        inFocusItems5="mumbai murder case"
        inFocusItems6="delhi news"
        inFocusItems7="delhi news"
      />
      <Row rowHeading="Photostories" />
      <h5>ADVERTISMENT</h5>
      <Row rowHeading="You May Like" />
    </>
  );
};

export default City;
