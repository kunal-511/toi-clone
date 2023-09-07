import React from 'react';
import MainBanner from "./mainBanner";
import Navbar from "./navbar";
import HighlightNews from './highlightNews';
const Header: React.FC = () => {
  return (
    <>
    <MainBanner />
  <Navbar />
  <HighlightNews />
    </>
  );
};

export default Header;
