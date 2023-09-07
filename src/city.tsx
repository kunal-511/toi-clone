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
        <Title titleHeading="Delhi" cityHead={true} />
        <section className="content">
          <div className="part1">
            <div className="row1">
              <img src={img} alt="" />
              <div className="bulletin">
                <Bulletin />
              </div>
            </div>
            <div className="row2">
              <News />
              <span className="vertical-line"></span>
              <News />
              <span className="vertical-line"></span>
              <News />
              <span className="vertical-line"></span>
              <News />
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
