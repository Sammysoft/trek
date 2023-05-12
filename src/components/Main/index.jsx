import React from "react";
import Cards from "./Cards";
import Details from "./Details";
import AboutCard from "./AboutCards";
import FAQs from "./FAQs";
import GetApps from "./GetApps";
import Contact from "./Contact";

const MainSection = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="big-text">
          Most Popular For Documents Management App
        </div>
        <div className="small-text">
          Lorem ipsum dolor sit amet consectetur. In donec suspendisse ultricies
          id tortor purus mauris. Ligula molestie sed vivamus odio
        </div>
        <Cards />
        <br />
        <br />
        <br />
        <br />
        <div className="big-text">Keep Your Document More Organized</div>
        <div className="small-text">
          Lorem ipsum dolor sit amet consectetur. In donec suspendisse ultricies
          id tortor purus mauris. Ligula molestie sed vivamus odio
        </div>
        <Details />
        <br />
        <br />
        <div className="big-text">What Make’s Us Stand Out</div>
        <div className="small-text">
          Lorem ipsum dolor sit amet consectetur. In donec suspendisse ultricies
          id tortor purus mauris. Ligula molestie sed vivamus odio
        </div>
        <AboutCard />
        <br />
        <br />
        <div className="big-text">Frequently Asked Questions</div>
        <div className="small-text">
          Lorem ipsum dolor sit amet consectetur. In donec suspendisse ultricies
          id tortor purus mauris. Ligula molestie sed vivamus odio
        </div>
        <FAQs />
        <br />
        <br />
        <GetApps />
        <br />
        <br />
        <div className="big-text">Get In Touch Today</div>
        <div className="small-text">
          Lorem ipsum dolor sit amet consectetur. In donec suspendisse ultricies
          id tortor purus mauris. Ligula molestie sed vivamus odio
        </div>
        <Contact />
      </div>
    </>
  );
};

export default MainSection;
