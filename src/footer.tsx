import React from "react";
import "./Footer.scss";
import FooterColItems from "./footerColItems";
import SocialHandles from "./socialHandles";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className=" thick-line"></div>
      <div className="footer">
        <div className="footerColumns">
          <img
            src="https://static.toiimg.com/photo/71215965.cms"
            className="footerImage"
            alt=""
          />

          <div className="footerItems">
            <FooterColItems
              footerItems1="About us"
              footerItems2="create your own add"
              footerItems3="Terms of use"
              footerItems4="Privacy policy"
              footerItems5="Advertise with us"
              footerItems6="Grievance Redressal"
            />
            <FooterColItems
              footerItems1="RSS"
              footerItems2="Newsletter"
              footerItems3="Feedback"
              footerItems4="ePaper"
              footerItems5="Sitemap"
              footerItems6="Archives"
            />
          </div>
          <SocialHandles show={true} />
          <h2>OTHER TIMES GROUP NEWS SITES</h2>
          <div className="footerItems">
            <FooterColItems
              footerItems1="The Economic Times"
              footerItems2="Hindi Economic Times"
              footerItems3="Navbharat Times"
              footerItems4="Maharashtra Times"
              footerItems5="Telugu Samayam"
              footerItems6="Malayalam Sanmayam"
            />
            <FooterColItems
              footerItems1="I am Gujarat"
              footerItems2="Times Now"
              footerItems3="TimesPoints"
              footerItems4="Indiatimes"
              footerItems5="Brand Capital"
              footerItems6="Times Food"
            />
          </div>
        </div>
        <div className="footerColumns">
          <h2>POPULAR CATEGORIES</h2>
          <div className="footerItems">
            <FooterColItems
              footerItems1="Headlines"
              footerItems2="Sports News"
              footerItems3="Business News"
              footerItems4="India News"
              footerItems5="World News"
              footerItems6="Tech News"
            />
            <FooterColItems
              footerItems1="Bollywood News"
              footerItems2="Health Tips"
              footerItems3="Indian Tv Shows"
              footerItems4="Sports News"
              footerItems5="Photos"
              footerItems6="Videos"
            />
          </div>
          <h2>Top Trends</h2>
          <div className="footerItems">
            <FooterColItems
              footerItems1="G20 Summit"
              footerItems2="Aditya L1"
              footerItems3="MK Stalin"
              footerItems4="World Cup 2023"
              footerItems5="Manipur Violenece"
              footerItems6="Delhi G20"
            />
            <FooterColItems
              footerItems1="Asia Cup 2023"
              footerItems2="Hyderabad Rains"
              footerItems3="Parliament Session"
              footerItems4="S Jaishankar"
              footerItems5="U. Stalin"
              footerItems6="Jawan Movie"
            />
          </div>
          <h2> ENTERTAINMENT</h2>
          <div className="footerItems">
            <FooterColItems
              footerItems1="Viral News"
              footerItems2="Filmfare"
              footerItems3="Etime"
              footerItems4="Zoom"
              footerItems5="Cricbuzz.com"
              footerItems6="Bombay Times"
            />
            <FooterColItems
              footerItems1="TV"
              footerItems2="Lifestyle"
              footerItems3="Food News"
              footerItems4="Times Prime"
              footerItems5="What's Hot"
              footerItems6="Apps"
            />
          </div>
        </div>
        <div className="footerColumns">
          <h2>HOT ON THE WEB</h2>
          <div className="footerItems">
            <FooterColItems
              footerItems1="Jawan Collection"
              footerItems2="Lord Krishna"
              footerItems3="Jawan Review"
              footerItems4="Weight Loss"
              footerItems5="Fasting"
              footerItems6="Sammer Wankedhe"
            />
            <FooterColItems
              footerItems1="Keerthy Suresh"
              footerItems2="East Bharat"
              footerItems3="Sharukh Khan"
              footerItems4="Zodiac Signs"
              footerItems5="Health Benefits"
              footerItems6={null}
            />
          </div>
          <h2>TRENDING TOPS</h2>
          <div className="footerItems">
            <FooterColItems
              footerItems1="Jawan Review"
              footerItems2="Hair Care Tips"
              footerItems3="Optical Illusion"
              footerItems4="Nayanthara"
              footerItems5="Marathi Actress"
              footerItems6="Krishna Jayanthhi"
            />
            <FooterColItems
              footerItems1="Vivo Y55s"
              footerItems2="Laptops"
              footerItems3="WiFi Routers"
              footerItems4="Tablets"
              footerItems5="Dream Girl Collection"
              footerItems6={null}
            />
          </div>
          <h2>Services</h2>
          <div className="footerItems">
            <FooterColItems
              footerItems1="CouponDunia"
              footerItems2="Magicbricks"
              footerItems3="TechGig"
              footerItems4="TimeSJobs"
              footerItems5="Bollywood News"
              footerItems6={null}
            />
            <FooterColItems
              footerItems1="Times Mobile"
              footerItems2="Gadgets Now"
              footerItems3="Carrers"
              footerItems4="Colombia"
              footerItems5={null}
              footerItems6={null}
            />
          </div>
        </div>
      </div>
      <div className="dotted-line"></div>
      <p className="center">
        Copyright © 2023 Bennett, Coleman & Co. Ltd. All rights reserved. For
        reprint rights: Times Syndication Service
      </p>
    </footer>
  );
};

export default Footer;
