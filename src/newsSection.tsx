import React from "react";
import "./NewsSection.scss";
import { AiOutlineRight } from "react-icons/ai";
import img from "./assets/news.png";
import News2 from "./News2";
const NewsSection: React.FC = () => {
  return (
    <>
      <section className="newsSection">
        <section className="columns">
          <div>
            <div>
              <h2>
                Viral
                <AiOutlineRight className="rightArrow" />
              </h2>
            </div>
            <div className="news">
            <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
            </div>
          </div>
          <div className="dotted-line"></div>
          <div className="Hstack">
          <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />

          <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
          </div>
        </section>

        <section className="columns">
          <div>
            <h2>
              Auto <AiOutlineRight className="rightArrow" />
            </h2>
          </div>
          <div className="news">
          <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
          </div>
          <div className="dotted-line"></div>
          <div className="Hstack">
          <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />

          <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
          </div>
        </section>

        <section className="columns">
          <div>
            <h2>
              New On YT <AiOutlineRight className="rightArrow" />
            </h2>
          </div>
          <div className="news">
          <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
          </div>
          <div className="dotted-line"></div>

          <div className="Hstack">
          <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />

          <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
          </div>
        </section>
      </section>
      <div className="double-line">
        <div className="dotted-line"></div>
        <div className="dotted-line"></div>
      </div>
    </>
  );
};

export default NewsSection;
