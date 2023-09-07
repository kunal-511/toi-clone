import React from "react";
import News from "./news";

import { AiOutlineRight } from "react-icons/ai";
interface BlogsProps {
  blogsHeading: string;
}
const Summary: React.FC<BlogsProps> = ({ blogsHeading }) => {
  return (
    <div className="blogs">
      <div className="blogsImg">
        <p className="blogsText">
          {blogsHeading} <AiOutlineRight className="rightArrow" />
        </p>
        <News
          text="hello"
          imageUrl="https://static.toiimg.com/thumb/imgsize-47806,msid-103427576,width-600,resizemode-4/103427576.jpg"
        />
      </div>
      <div className="blogsContent">
        <News text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        <News text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        <News text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
        
      </div>
    </div>
  );
};

export default Summary;
