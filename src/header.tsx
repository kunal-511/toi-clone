import React from 'react';
import MainBanner from "./mainBanner";
import Navbar from "./navbar";
import HighlightNews from './highlightNews';
const Header: React.FC = () => {
    const handleapi = () => {
      fetch("https://invalid-api-url.com/data")
        .then((response) => response.json())
        .then((data) => console.log(data));
      // No catch block, so Sentry will catch the rejection
    };

  return (
    <>
      <MainBanner />
      <div style={{ backgroundColor: "Green", height: "100px" }}>
        <h1>Welcome to my App</h1>
        <button onClick={() => methodDoesNotExist()}>Break the world</button>
      </div>

      <div style={{ backgroundColor: "pink", height: "100px" }}>
        <h1>API Error Example</h1>
        <button onClick={handleapi}>Fetch Data</button>
      </div>
      <Navbar />
      <HighlightNews />
    </>
  );
};

export default Header;
