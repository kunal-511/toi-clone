import React from "react";
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.scss";
const Navbar: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>TOI+</li>
          <li>Explainer</li>
          <li>Videos</li>
          <li>City</li>
          <li>India</li>
          <li>World</li>
          <li>Business</li>
          <li>Tech</li>
          <li>Cricket</li>
          <li>Sports</li>
          <li>Entertainment</li>
          <li>Auto</li>
          <li>Tv</li>
          <li>Web Series</li>
          <li>Life & style</li>
          <li>Education</li>
          <li>
            <GoSearch className="search" />
          </li>
          <li>
            <RxHamburgerMenu />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
