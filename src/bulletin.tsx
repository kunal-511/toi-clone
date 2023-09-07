import React from "react";

interface BulletinProps {
  BulletinItem1: string;
  BulletinItem2: string;
  BulletinItem3: string;
  BulletinItem4: string;
  BulletinItem5: string;
  BulletinItem6: string;
  BulletinItem7: string;
  BulletinItem8: string;
}
const Bulletin: React.FC<BulletinProps> = ({
  BulletinItem1,
  BulletinItem2,
  BulletinItem3,
  BulletinItem4,
  BulletinItem5,
  BulletinItem6,
  BulletinItem7,
  BulletinItem8,
}) => {
  return (
    <>
      <ul>
        <li>{BulletinItem1}..</li>
        <li>{BulletinItem2}..</li>
        <li>{BulletinItem3}..</li>
        <li>{BulletinItem4}..</li>
        <div className="dotted-line"></div>
        <li>{BulletinItem5}..</li>
        <div className="dotted-line"></div>
        <li>{BulletinItem6}..</li>
        <div className="dotted-line"></div>
        <li>{BulletinItem7}..</li>
        <div className="dotted-line"></div>
        <li>{BulletinItem8}...</li>
        <div className="dotted-line"></div>
      </ul>
    </>
  );
};
Bulletin.defaultProps = {
  BulletinItem1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  BulletinItem2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  BulletinItem3: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  BulletinItem4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  BulletinItem5: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  BulletinItem6: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  BulletinItem7: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  BulletinItem8: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
};

export default Bulletin;
