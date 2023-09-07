import React from "react";
import "./City.scss";
import "./Sports.scss";
import Bulletin from "./bulletin";
import News2 from "./News2";
import News from "./news";
import Title from "./title";
import img from "./assets/news.png";

interface SportsProps {
  newsImageUrl: string;
  newsBulletin1: string;
  newsBulletin2: string;
  newsBulletin3: string;
  newsBulletin4: string;
  newsBulletin5: string;
  newsTypeHeading: string;

  specificNewsTitle1: string | null;
  specificNewsTitle2: string | null;
  specificNewsTitle3: string | null;
  specificNewsTitle4: string | null;
}

const Sports: React.FC<SportsProps> = ({
  newsImageUrl,

  newsTypeHeading,
 
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
                <Bulletin />
              </div>
            </div>
            <div className="sportsVideos">
             <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
             <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
             <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
             <News text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
            </div>
          </div>
          <span className="vertical-line2"></span>
          <div className="sportsBulletin">
           <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
           <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
           <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
           <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
           <News2 text="Lorem ipsum  dolor sit consectetur." imageUrl={img} />
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
