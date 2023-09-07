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

      <Spotlight />
      <Entertainment />
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

      <Row />
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
      <InFocus />
      <Sports
        imageText="India squad:'Batting depth' is Buzzword"
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
        imageText="TikTok may be planning to be your new messaging app"
        newsTypeHeading="Tech"
        specificNewsTitle1="Videos"
        specificNewsTitle2="slideShow"
        specificNewsTitle3="Gadget news"
        specificNewsTitle4="AI"
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
        imageText="What is UPI ATM? FAQs"
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-22292,msid-103429078,width-600,resizemode-4/103429078.jpg"
        specificNewsTitle1="india"
        specificNewsTitle2="International"
        specificNewsTitle3="videos"
        specificNewsTitle4="banking"
      />
      <InFocus
        inFocusItems1="bank holidays in september"
        inFocusItems2="income tax calculator"
        inFocusItems3="pan aadhaar link status"
        inFocusItems4="nifty50"
        inFocusItems5="crytocureency"
        inFocusItems6="Stocks"
      />
      <Sports
        newsTypeHeading="World"
        imageText="The death toll from fierce storms and flooding in Greece"
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-1324416,msid-103427744,width-600,resizemode-4/103427744.jpg"
        specificNewsTitle1="us"
        specificNewsTitle2="Uk"
        specificNewsTitle3="videos"
        specificNewsTitle4="middle east"
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
      <Sports newsTypeHeading="From Across Toi" />
      <Row rowHeading="Sponsored Stories" />
      <Sports
        newsTypeHeading="Travel"
        imageText="Photos that bring out the beauty of Chhattisgarh"
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-102254,msid-103420922,width-600,resizemode-4/103420922.jpg"
      />
      <Sports
        newsTypeHeading="Recipes & Food News"
        imageText="Food rules to follow while fasting"
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-47150,msid-103407078,width-600,resizemode-4/103407078.jpg"
        specificNewsTitle1="recipes"
        specificNewsTitle2="food news"
        specificNewsTitle3="recipe videos"
      />
      <Sports
        newsTypeHeading="Health & Fitness"
        imageText="Lessons from 97 yr old fitness inspiration"
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-35800,msid-103386254,width-600,resizemode-4/103386254.jpg"
      />
      <Row rowHeading="Telivision Highlights" />
      <Sports
        newsTypeHeading="Auto"
        imageText="TVS Apache RTR 310 India launch Live Updates"
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-1254304,msid-103426210,width-600,resizemode-4/103426210.jpg"
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
        imageText="Bullying at School: What Parents Can Do"
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-27536,msid-103425376,width-600,resizemode-4/103425376.jpg"
        specificNewsTitle1="jobs"
        specificNewsTitle2="admission"
        specificNewsTitle3="results"
        specificNewsTitle4="learning with toi"
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
        imageText="Does India link us to our British rulers or "
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-1280481,msid-103416978,width-600,resizemode-4/103416978.jpg"
        specificNewsTitle1="times view"
        specificNewsTitle2="readers's blog"
        specificNewsTitle3="foreign media"
        specificNewsTitle4="Q&a"
      />
      <div className="double-line">
        <div className="dotted-line"></div>
        <div className="dotted-line"></div>
      </div>
      <Sports
        newsTypeHeading="Citizen Reporter"
        imageText="Overflow of drain"
        newsImageUrl="https://static.toiimg.com/thumb/imgsize-295248,msid-81541286,width-600,resizemode-4/81541286.jpg"
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
