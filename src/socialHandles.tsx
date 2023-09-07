import React from "react";
import img from "./assets/news.png";
type SocialHandles = {
  show: boolean;
};
const SocialHandles: React.FC<SocialHandles> = ({ show }) => {
  if (show) {
    return (
      <>
        <h3>Follow us on</h3>
        <div className="follow">
          <img src={img} width={"40vw"} alt="" />
          <img src={img} width={"40vw"} alt="" />
          <img src={img} width={"40vw"} alt="" />
          <img src={img} width={"40vw"} alt="" />
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default SocialHandles;
