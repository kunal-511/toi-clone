import React from "react";
import MainNews from "./mainNews";
import NewsSection from "./newsSection";
import Spotlight from "./spotlight";
import Entertainment from "./entertainment";
import Row from "./row";
import InFocus from "./infocus";
import City from "./city";
import Lifestyle from "./lifetstyle";
import EntertainmentPart2 from "./entertainmentPart2";
import Sports from "./sports";
import VisualStories from "./visualStories";
import Summary from "./summary";

const MainContent: React.FC = () => {
  return (
    <>
      <MainNews />
      <NewsSection />

      <Spotlight spotlightHeading="spotlight"/>
      <Entertainment entertainmentHeading="entertainment"/>
      <InFocus
        inFocusItems1="sridevi"
        inFocusItems2="keerthy suresh"
        inFocusItems3="fatima sana"
        inFocusItems4="mrunal thakur"
        inFocusItems5="hritik roshan"
        inFocusItems6="Amala Paul"
        inFocusItems7="Sharukh Khan"
      />
      <div className="double-line">
        <div className="dotted-line"></div>
        <div className="dotted-line"></div>
      </div>

      <Row rowHeading="row" />
      <City />
      <Lifestyle />
      <Lifestyle />
      <Lifestyle />
      <VisualStories />
      <InFocus
        inFocusItems1="cancer risk"
        inFocusItems2="elaine lalanie"
        inFocusItems3="aries"
        inFocusItems4="optical illusion"
        inFocusItems5="joe biden"
        inFocusItems6="sabyasachi lehenga"
        inFocusItems7="ruby franke"
      />
      <div className="double-line">
        <div className="dotted-line"></div>
        <div className="dotted-line"></div>
      </div>
      <Row rowHeading="MOST SEARCHED PRODUCTS" />

      <EntertainmentPart2 />
      <Row rowHeading="Shopping Destination" />
      <InFocus inFocusItems1="inFocusItems" inFocusItems2="inFocusItems" inFocusItems3="inFocusItems" inFocusItems4="inFocusItems" inFocusItems5="inFocusItems" inFocusItems6= "inFocusItems" inFocusItems7="infocusItems"/>
      <Sports

        newsTypeHeading="Sports"
        newsBulletin1="World Cup: Fans scamper for the elusiv"
        newsBulletin2="US Open: Bopanna-Edben after men's"
        newsBulletin3="US Open: Djokovic beats Frizz to enter"
        newsBulletin4="Messi Back on Argentina duty as 2026"
        newsBulletin5="Asia Cup: Did minsinformation cost Afganistan a plac"
        specificNewsTitle1="Cricket"
        specificNewsTitle2="Football"
        specificNewsTitle3="Tennis"
        specificNewsTitle4="hockey"
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-47806,msid-103427576,width-600,resizemode-4/103427576.jpg"
      />
      <InFocus
        inFocusItems1="us open2023"
        inFocusItems2="karolina muchova"
        inFocusItems3="hima das"
        inFocusItems4="asian games"
        inFocusItems5="asia cup 2023"
        inFocusItems6="new zeland vs england"
        inFocusItems7={null}
      
      />
      <VisualStories />
      <Sports
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-47806,msid-103427576,width-600,resizemode-4/103427576.jpg"
      
        newsTypeHeading="Tech"
        specificNewsTitle1="Videos"
        specificNewsTitle2="slideShow"
        specificNewsTitle3="Gadget news"
        specificNewsTitle4="AI"
        newsBulletin1="World Cup: Fans scamper for the elusiv"
        newsBulletin2="US Open: Bopanna-Edben after men's"
        newsBulletin3="US Open: Djokovic beats Frizz to enter"
        newsBulletin4="Messi Back on Argentina duty as 2026"
        newsBulletin5="Asia Cup: Did minsinformation cost Afganistan a plac"
      />
      <InFocus
        inFocusItems1="amazon ceo warning"
        inFocusItems2="google and meta engineer salary"
        inFocusItems3="apple turns to chinese suppliers"
        inFocusItems4="uber eats ai chatbot"
        inFocusItems5="new bing chat"
        inFocusItems6={null}
        inFocusItems7={null}
      />
      <Sports
        newsTypeHeading="Business"

        newsImageUrl="https://static.toiimg.com/thumb/imgsize-22292,msid-103429078,width-600,resizemode-4/103429078.jpg"
        specificNewsTitle1="india"
        specificNewsTitle2="International"
        specificNewsTitle3="videos"
        specificNewsTitle4="banking"
        newsBulletin1="World Cup: Fans scamper for the elusiv"
        newsBulletin2="US Open: Bopanna-Edben after men's"
        newsBulletin3="US Open: Djokovic beats Frizz to enter"
        newsBulletin4="Messi Back on Argentina duty as 2026"
        newsBulletin5="Asia Cup: Did minsinformation cost Afganistan a plac"
      />
      <InFocus
        inFocusItems1="bank holidays in september"
        inFocusItems2="income tax calculator"
        inFocusItems3="pan aadhaar link status"
        inFocusItems4="nifty50"
        inFocusItems5="crytocureency"
        inFocusItems6="Stocks"
        inFocusItems7={null}
      />
      <Sports
        newsTypeHeading="World"
      
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-1324416,msid-103427744,width-600,resizemode-4/103427744.jpg"
        specificNewsTitle1="us"
        specificNewsTitle2="Uk"
        specificNewsTitle3="videos"
        specificNewsTitle4="middle east"
        newsBulletin1="World Cup: Fans scamper for the elusiv"
        newsBulletin2="US Open: Bopanna-Edben after men's"
        newsBulletin3="US Open: Djokovic beats Frizz to enter"
        newsBulletin4="Messi Back on Argentina duty as 2026"
        newsBulletin5="Asia Cup: Did minsinformation cost Afganistan a plac"
      />
      <InFocus
        inFocusItems1="pakistan news"
        inFocusItems2="joe biden"
        inFocusItems3="us news"
        inFocusItems4="kim jong un"
        inFocusItems5="donald trump"
        inFocusItems6="us election"
        inFocusItems7={null}
      />
      <Sports newsTypeHeading="From Across Toi"
       newsBulletin1="World Cup: Fans scamper for the elusiv"
       newsBulletin2="US Open: Bopanna-Edben after men's"
       newsBulletin3="US Open: Djokovic beats Frizz to enter"
       newsBulletin4="Messi Back on Argentina duty as 2026"
       newsBulletin5="Asia Cup: Did minsinformation cost Afganistan a plac"
       specificNewsTitle1={null}
       specificNewsTitle2={null}
       specificNewsTitle3={null}
       specificNewsTitle4={null}
       newsImageUrl="https://static.toiimg.com/thumb/imgsize-102254,msid-103420922,width-600,resizemode-4/103420922.jpg"
      />
      <Row rowHeading="Sponsored Stories" />
      <Sports
        newsTypeHeading="Travel"
        specificNewsTitle1={null}
        specificNewsTitle2={null}
        specificNewsTitle3={null}
        specificNewsTitle4={null}
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-102254,msid-103420922,width-600,resizemode-4/103420922.jpg"
        newsBulletin1="World Cup: Fans scamper for the elusiv"
        newsBulletin2="US Open: Bopanna-Edben after men's"
        newsBulletin3="US Open: Djokovic beats Frizz to enter"
        newsBulletin4="Messi Back on Argentina duty as 2026"
        newsBulletin5="Asia Cup: Did minsinformation cost Afganistan a plac"
      />
      <Sports
        newsTypeHeading="Recipes & Food News"
        specificNewsTitle4={null}
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-47150,msid-103407078,width-600,resizemode-4/103407078.jpg"
        specificNewsTitle1="recipes"
        specificNewsTitle2="food news"
        specificNewsTitle3="recipe videos"
        newsBulletin1="World Cup: Fans scamper for the elusiv"
        newsBulletin2="US Open: Bopanna-Edben after men's"
        newsBulletin3="US Open: Djokovic beats Frizz to enter"
        newsBulletin4="Messi Back on Argentina duty as 2026"
        newsBulletin5="Asia Cup: Did minsinformation cost Afganistan a plac"
      />
      <Sports
        newsTypeHeading="Health & Fitness"
        specificNewsTitle1={null}
        specificNewsTitle2={null}
        specificNewsTitle3={null}
        specificNewsTitle4={null}
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-35800,msid-103386254,width-600,resizemode-4/103386254.jpg"
        newsBulletin1="World Cup: Fans scamper for the elusiv"
        newsBulletin2="US Open: Bopanna-Edben after men's"
        newsBulletin3="US Open: Djokovic beats Frizz to enter"
        newsBulletin4="Messi Back on Argentina duty as 2026"
        newsBulletin5="Asia Cup: Did minsinformation cost Afganistan a plac"
      />
      <Row rowHeading="Telivision Highlights" />
      <Sports
        newsTypeHeading="Auto"
        specificNewsTitle1={null}
        specificNewsTitle2={null}
        specificNewsTitle3={null}
        specificNewsTitle4={null}
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-1254304,msid-103426210,width-600,resizemode-4/103426210.jpg"
        newsBulletin1="World Cup: Fans scamper for the elusiv"
        newsBulletin2="US Open: Bopanna-Edben after men's"
        newsBulletin3="US Open: Djokovic beats Frizz to enter"
        newsBulletin4="Messi Back on Argentina duty as 2026"
        newsBulletin5="Asia Cup: Did minsinformation cost Afganistan a plac"
      />
      <InFocus
        inFocusItems1="volvo s60 review"
        inFocusItems2="hyundai i20"
        inFocusItems3="maruti suzuki q2 results"
        inFocusItems4="bmw india"
        inFocusItems5="hyundai grand i10 nios"
        inFocusItems6="harley davidson"
        inFocusItems7={null}
      />

      <Sports
        newsTypeHeading="Education"

        newsImageUrl="https://static.toiimg.com/thumb/imgsize-27536,msid-103425376,width-600,resizemode-4/103425376.jpg"
        specificNewsTitle1="jobs"
        specificNewsTitle2="admission"
        specificNewsTitle3="results"
        specificNewsTitle4="learning with toi"
        newsBulletin1="World Cup: Fans scamper for the elusiv"
        newsBulletin2="US Open: Bopanna-Edben after men's"
        newsBulletin3="US Open: Djokovic beats Frizz to enter"
        newsBulletin4="Messi Back on Argentina duty as 2026"
        newsBulletin5="Asia Cup: Did minsinformation cost Afganistan a plac"
      />
      <InFocus
        inFocusItems1="bitsat exam"
        inFocusItems2="jee main exam"
        inFocusItems3="neet exam"
        inFocusItems4="exam results"
        inFocusItems5="gate exam"
        inFocusItems6="jee advanced exam"
        inFocusItems7="mba exam"
      />
      <div className="double-line">
        <div className="dotted-line"></div>
        <div className="dotted-line"></div>
      </div>
      <Sports
        newsTypeHeading="Opinion And Features"

        newsImageUrl="https://static.toiimg.com/thumb/imgsize-1280481,msid-103416978,width-600,resizemode-4/103416978.jpg"
        specificNewsTitle1="times view"
        specificNewsTitle2="readers's blog"
        specificNewsTitle3="foreign media"
        specificNewsTitle4="Q&a"
        newsBulletin1="World Cup: Fans scamper for the elusiv"
        newsBulletin2="US Open: Bopanna-Edben after men's"
        newsBulletin3="US Open: Djokovic beats Frizz to enter"
        newsBulletin4="Messi Back on Argentina duty as 2026"
        newsBulletin5="Asia Cup: Did minsinformation cost Afganistan a plac"
      />
      <div className="double-line">
        <div className="dotted-line"></div>
        <div className="dotted-line"></div>
      </div>
      <Sports
        newsTypeHeading="Citizen Reporter"
        specificNewsTitle1={null}
        specificNewsTitle2={null}
        specificNewsTitle3={null}
        specificNewsTitle4={null}
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-295248,msid-81541286,width-600,resizemode-4/81541286.jpg"
        newsBulletin1="World Cup: Fans scamper for the elusiv"
        newsBulletin2="US Open: Bopanna-Edben after men's"
        newsBulletin3="US Open: Djokovic beats Frizz to enter"
        newsBulletin4="Messi Back on Argentina duty as 2026"
        newsBulletin5="Asia Cup: Did minsinformation cost Afganistan a plac"
      />
      <div className="double-line">
        <div className="dotted-line"></div>
        <div className="dotted-line"></div>
      </div>
      <Summary />
      <div className="double-line">
        <div className="dotted-line"></div>
        <div className="dotted-line"></div>
      </div>
      <Row rowHeading="Mediawire" />
    </>
  );
};

export default MainContent;
