import React from "react";
import "./City.scss";
import "./Sports.scss";
import Bulletin from "./bulletin";
import News2 from "./News2";
import News from "./news";
import Title from "./title";

interface SportsProps {
  newsImageUrl: string;
  newsBulletin1: string;
  newsBulletin2: string;
  newsBulletin3: string;
  newsBulletin4: string;
  newsBulletin5: string;
  newsTypeHeading: string;
  imageText: string;
  specificNewsTitle1: string;
  specificNewsTitle2: string;
  specificNewsTitle3: string;
  specificNewsTitle4: string;
}

const Sports: React.FC<SportsProps> = ({
  newsImageUrl,
  newsBulletin1,
  newsBulletin2,
  newsBulletin3,
  newsBulletin4,
  newsBulletin5,
  newsTypeHeading,
  imageText,
  specificNewsTitle1,
  specificNewsTitle2,
  specificNewsTitle3,
  specificNewsTitle4,
}) => {
  return (
    <>
      <section className="city">
        <Title
          cityHead={false}
          titleHeading={newsTypeHeading}
          titleItem1={specificNewsTitle1}
          titleItem2={specificNewsTitle2}
          titleItem3={specificNewsTitle3}
          titleItem4={specificNewsTitle4}
        />
        <section className="content">
          <div className="part1">
            <div className="row1">
              <div className="textOver">
                <img src={newsImageUrl} className="img" alt="" />
                {/* <p>{imageText}</p> */}
              </div>
              <div className="bulletin">
                <Bulletin
                  BulletinItem4={newsBulletin1}
                  BulletinItem5={newsBulletin2}
                  BulletinItem6={newsBulletin3}
                  BulletinItem7={newsBulletin4}
                  BulletinItem8={newsBulletin5}
                />
              </div>
            </div>
            <div className="sportsVideos">
              <News />
              <News />
              <News />
              <News />
            </div>
          </div>
          <span className="vertical-line2"></span>
          <div className="sportsBulletin">
            <News2 />
            <News2 />
            <News2 />
            <News2 />
            <News2 />
          </div>
        </section>
      </section>
    </>
  );
};

Sports.defaultProps = {
  newsImageUrl:
    "https://static.toiimg.com/thumb/imgsize-98226,msid-103411949,width-600,resizemode-4/103411949.jpg",
};

export default Sports;
