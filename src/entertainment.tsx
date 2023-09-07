import React from "react";
import "./Entertainment.scss";
import News from "./news";
import Bulletin from "./bulletin";
import Advertisement from "./advertisment";
import { AiOutlineRight } from "react-icons/ai";
interface EntertainmentProps {
  entertainmentHeading: string;
}
const Entertainment: React.FC<EntertainmentProps> = ({
  entertainmentHeading,
}) => {
  return (
    <>
      <div className="entertainmentHead">
        <h2>
          {entertainmentHeading} <AiOutlineRight className="rightArrow" />
        </h2>
      </div>
      <div className="entertainment">
        <main>
          <section className="column">
            <div className="image-container">
              <img
                src="https://static.toiimg.com/thumb/imgsize-40988,msid-103417753,width-600,resizemode-4/103417753.jpg"
                className="img"
                alt=""
              />
              <p className="image-text">
                Gadar 2 all set to beat Baahubali:The Conclusion
              </p>
            </div>
            <div>
              <News
                text="Lorem ipsum  dolor sit consectetur."
                imageUrl="{img}"
              />
              <News
                text="Lorem ipsum  dolor sit consectetur."
                imageUrl="{img}"
              />
            </div>
            <div>
              <News
                text="Lorem ipsum  dolor sit consectetur."
                imageUrl="{img}"
              />
              <News
                text="Lorem ipsum  dolor sit consectetur."
                imageUrl="{img}"
              />
            </div>
          </section>
          <section className="column bulletin">
            <Bulletin />
            <Bulletin />
          </section>
          <span className="vertical-line"></span>
          <section className="column">
            <h3>
              Etime Photos <AiOutlineRight className="rightArrow" />
            </h3>
            <div className="etimesPhotos">
              <div>
                <News
                  text="Lorem ipsum  dolor sit consectetur."
                  imageUrl="{img}"
                />
                <News
                  text="Lorem ipsum  dolor sit consectetur."
                  imageUrl="{img}"
                />
              </div>
              <div>
                <News
                  text="Lorem ipsum  dolor sit consectetur."
                  imageUrl="{img}"
                />
                <News
                  text="Lorem ipsum  dolor sit consectetur."
                  imageUrl="{img}"
                />
              </div>
              <div className="mediaQuery">
                <News
                  text="Lorem ipsum  dolor sit consectetur."
                  imageUrl="{img}"
                />
                <News
                  text="Lorem ipsum  dolor sit consectetur."
                  imageUrl="{img}"
                />
              </div>
            </div>

            <Advertisement />
          </section>
        </main>
      </div>
    </>
  );
};
Entertainment.defaultProps = {
  entertainmentHeading: "Entertainment",
};

export default Entertainment;
