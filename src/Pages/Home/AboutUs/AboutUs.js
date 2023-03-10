import React from "react";
import AboutBanner from "./AboutBanner/AboutBanner";
import OurStory from "./OurStory/OurStory";
import OurTeam from "./OurTeam/OurTeam";

const AboutUs = () => {
  return (
    <div className="mx-5">
      <AboutBanner></AboutBanner>
      <OurStory></OurStory>
      <OurTeam></OurTeam>
    </div>
  );
};

export default AboutUs;
