import React from "react";
import "./NewsSection.scss";
import { AiOutlineRight } from "react-icons/ai";
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
              <News2 />
            </div>
          </div>
          <div className="dotted-line"></div>
          <div className="Hstack">
            <News2 />

            <News2 />
          </div>
        </section>

        <section className="columns">
          <div>
            <h2>
              Auto <AiOutlineRight className="rightArrow" />
            </h2>
          </div>
          <div className="news">
            <News2 />
          </div>
          <div className="dotted-line"></div>
          <div className="Hstack">
            <News2 />

            <News2 />
          </div>
        </section>

        <section className="columns">
          <div>
            <h2>
              New On YT <AiOutlineRight className="rightArrow" />
            </h2>
          </div>
          <div className="news">
            <News2 />
          </div>
          <div className="dotted-line"></div>

          <div className="Hstack">
            <News2 />

            <News2 />
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
