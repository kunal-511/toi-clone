import React from "react";
import img from "./assets/news.png";
import "./news.scss";
interface NewsProps {
  imageUrl: string;
  text: string;
}

const News: React.FC<NewsProps> = ({ imageUrl, text }) => {
  return (
    <div className="newsComponent">
      <p>{text}</p>
      <img src={imageUrl} alt="" />
    </div>
  );
};

News.defaultProps = {
  imageUrl: img,
  text: "Lorem ipsum  dolor sit consectetur.",
};

export default News;
