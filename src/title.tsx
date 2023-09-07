import React from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { AiOutlineRight } from "react-icons/ai";
interface TitleProps {
  titleHeading: string;
  cityHead: boolean;
  titleItem1: string | null;
  titleItem2: string | null;
  titleItem3: string | null;
  titleItem4: string | null;
}

const Title: React.FC<TitleProps> = ({
  titleHeading,
  cityHead,
  titleItem1,
  titleItem2,
  titleItem3,
  titleItem4,
}) => {
  if (cityHead) {
    return (
      <div>
        <div className="head">
          <h2>{titleHeading}</h2>
          <p>
            Delhi <BsBrightnessHigh /> 35°C{" "}
            <span className="vertical-line"></span> CHANGE CITY <ImLocation />{" "}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="newsTop">
        <h2 className="titelHeading">
          {titleHeading} <AiOutlineRight className="rightArrow" />
        </h2>
        <div className="head">
          <ul>
            <li>featured</li>
            <li>{titleItem1}</li>
            <li>{titleItem2}</li>
            <li>{titleItem3}</li>
            <li>{titleItem4}</li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Title;
