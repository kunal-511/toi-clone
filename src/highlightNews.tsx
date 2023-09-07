import React from "react";
import "./HighlightNews.scss";
import { AiOutlinePlaySquare } from "react-icons/ai";
const HighlightNews: React.FC = () => {
  return (
    <>
      <div className="highlightNews">
        <ul>
          <li>In the news</li>
          <li>Saffola lifestyle score</li>
          <li>G20 summit 2023</li>
          <li>Aditya l1</li>
          <li>Asia cup 2023</li>
          <li>assembly election 2023</li>
        </ul>
      </div>
      <div className="premium">
        <button>
          {" "}
          <AiOutlinePlaySquare className="AiOutlinePlaySquare" /> Now Playing
        </button>
        <span>Enjoy premium news experience with TOI+ </span>
      </div>
    </>
  );
};

export default HighlightNews;
