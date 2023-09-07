import React from "react";
import News from "./news";
import "./Row.scss";
interface RowProps {
  rowHeading: string;
}
const Row: React.FC<RowProps> = ({ rowHeading }) => {
  return (
    <section className="row">
      <h2>{rowHeading}</h2>
      <div>
       <News text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
       <News text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
       <News text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
       <News text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
       <News text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
       <News text="Lorem ipsum  dolor sit consectetur." imageUrl="{img}" />
      </div>
    </section>
  );
};
Row.defaultProps = {
  rowHeading: "Trending",
};
export default Row;
