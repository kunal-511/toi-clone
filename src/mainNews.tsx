import React from "react";
import "./MainNews.scss";
import img from "./assets/news.png";
import News from "./news";
import { BiPlusMedical } from "react-icons/bi";
import Advertisement from "./advertisment";

import {
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
  AiOutlineRight,
} from "react-icons/ai";
import Bulletin from "./bulletin";
const MainNews: React.FC = () => {
  return (
    <>
      <div className="mainNews">
        <div className="column1">
          <div className="image-container">
            <img
              className="img"
              src="https://static.toiimg.com/thumb/imgsize-1237178,msid-103404862,width-600,resizemode-4/103404862.jpg"
              alt=""
            />
            <p className="image-text">
              India vs Bharat:Will special parilament debate country's name
              change?
            </p>
          </div>
          <main>
            <section>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
            </section>
            <section>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
              <div className="dotted-line"></div>
            <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
            </section>
          </main>
        </div>
        <span className="vertical-line"></span>
        <div className="column2">
        <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img}/>
        <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
        <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
        <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
        <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
        <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
        <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
        <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
        </div>
        <span className="vertical-line"></span>
        <div className="column3">
          <Advertisement />
          <div className="toiPremium">
            <div>
              <h2>
                TOI <BiPlusMedical className="plus red" />
              </h2>
              <p className="red">
                Read more stories <AiOutlineRight className="rightArrow" />
              </p>
            </div>
            <span className="bold">Read in-depth stories by experts</span>

          <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />

          <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
          <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
          </div>
          <div className="bulletin">
            <Bulletin />
          </div>
          <Advertisement />
        </div>
      </div>
      <div className="trendingNews">
        <ul>
          <li>TRENDING NEWS</li>
          <li>MK Stalin Son</li>
          <li>Delhi G20 Summit</li>
          <li>Article 370</li>
          <li>India vs Nepal</li>
          <li>Kedarnath Avalanche</li>
          <li>Aditya L1</li>
          <li>
            <AiOutlineLeftCircle />
          </li>
          <li>
            <AiOutlineRightCircle />
          </li>
        </ul>
      </div>
      <div className="double-line">
        <div className="dotted-line"></div>
        <div className="dotted-line"></div>
      </div>
    </>
  );
};

export default MainNews;
