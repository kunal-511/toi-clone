import React, {useState, useEffect} from "react";
import "./MainBanner.scss";
import { CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";


const MainBanner: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the currentDateTime state every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const formattedDateTime = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).format(currentDateTime);

    
  return (
    <div className="mainBanner">
      <div>
        <div>
          <p>EDITION </p>
          <select name="" id="">
            <option value="india">IN</option>
            <option value="usa">US</option>
          </select>
          <div className="date">
      <p>{formattedDateTime}</p>
    </div>
        </div>
        <div>
          <button className="subscribe">Subscribe To toi+</button>
          <button className="signIn">Sign In</button>

          <CiFacebook className="CiFacebook" />
          <CiTwitter className="CiTwitter" />
          <CiYoutube className="CiYoutube" />
        </div>
      </div>

      <img
        src="https://timesofindia.indiatimes.com/photo/103440281.cms"
        className="mainHeading"
        alt=""
      />
    </div>
  );
};

export default MainBanner;
