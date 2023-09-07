import React from "react";
import "./InFocus.scss";
interface InFocusProps {
  inFocusItems1: string;
  inFocusItems2: string;
  inFocusItems3: string;
  inFocusItems4: string;
  inFocusItems5: string;
  inFocusItems6: string | null;
  inFocusItems7: string | null;
}
const InFocus: React.FC<InFocusProps> = ({
  inFocusItems1,
  inFocusItems2,
  inFocusItems3,
  inFocusItems4,
  inFocusItems5,
  inFocusItems6,
  inFocusItems7,
}) => {
  return (
    <div className="inFocus">
      <ul>
        <li>infocus</li>
        <li>{inFocusItems1}</li>
        <li>{inFocusItems2}</li>
        <li>{inFocusItems3}</li>
        <li>{inFocusItems4}</li>
        <li>{inFocusItems5}</li>
        <li>{inFocusItems6}</li>
        <li>{inFocusItems7}</li>
      </ul>
    </div>
  );
};
InFocus.defaultProps = {
  inFocusItems1: "inFocusItems",
  inFocusItems2: "inFocusItems",
  inFocusItems3: "inFocusItems",
  inFocusItems4: "inFocusItems",
  inFocusItems5: "inFocusItems",
  inFocusItems6: "inFocusItems",
  inFocusItems7: "inFocusItems",
};

export default InFocus;
