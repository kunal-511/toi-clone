import React from "react";
import img from "./assets/news.png";

interface News2Props {
  imageUrl: string;
  text: string;
}
const News2: React.FC<News2Props> = ({ imageUrl, text }) => {
  return (
    <div>
      <img src={imageUrl} alt="" />
      <p>{text}</p>
    </div>
  );
};

News2.defaultProps = {
  imageUrl: img,
  text: "Lorem ipsum dolor sit kunal amet consectetur.",
};
export default News2;
