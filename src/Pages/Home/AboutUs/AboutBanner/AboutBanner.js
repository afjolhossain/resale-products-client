import React from "react";
import bannerbg from "../../../../Assets/Images/bannerAbout.jpg";

const AboutBanner = () => {
  return (
    // <div
    //   className="hero min-h-screen"
    //   style={{ backgroundImage: `url(${bannerbg})` }}
    // >
    //   <div className="hero-overlay bg-opacity-30"></div>
    //   <div className="hero-content text-center text-neutral-content">
    //     <div className="max-w-md">
    //       <h1 className="mb-5 text-5xl font-bold"></h1>

    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>

    <div
      className="hero lg:min-h-screen sm:w-full"
      style={{ backgroundImage: `url(${bannerbg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">ABOUT AFJODECO</h1>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
