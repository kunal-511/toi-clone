import React from "react";
import "./Spotlight.scss";
import News from "./news";
interface Spotlight {
  spotlightHeading: string;
}
const Spotlight: React.FC<Spotlight> = ({ spotlightHeading }) => {
  return (
    <>
      <div className="spotlightHead">
        <h2>{spotlightHeading}</h2>
      </div>
      <div className="spotlight">
        <News />
        <News />
        <News />
      </div>
    </>
  );
};
Spotlight.defaultProps = {
  spotlightHeading: "Spotlight",
};
export default Spotlight;
