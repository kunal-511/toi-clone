import React from "react";
import "./LifeStyle.scss";
import LifestyleCard from "./lifestylecard";
const Lifestyle: React.FC = () => {
  return (
    <>
      <div className="main">
        <h2>Lifestyle</h2>
        <section className="lifestyle">
          <LifestyleCard lifestyleCardHeading="Health" />
          <LifestyleCard lifestyleCardHeading="Fashion" />
          <LifestyleCard lifestyleCardHeading="Relationships" />
        </section>
      </div>
    </>
  );
};

export default Lifestyle;
