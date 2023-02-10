import React from "react";
import whyFurniture from "../../../Assets/Images/whyFurniture.svg";

const WhySecondFurniture = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={whyFurniture}
          className="max-w-2xl rounded-lg shadow-2xl"
          alt=""
        />
        <div
          className="max-w-2xl"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="text-4xl font-bold">
            Why shop for secondhand furniture first?
          </h1>
          <p className="py-6">
            We’re shouting it from the rooftops—secondhand furniture should be
            your first choice! In fact, well-made used furniture can last
            through generations. Furniture holds memories. We gather around it
            in times of joy and celebration; we curl up with our loved ones on
            it; we use it to store our most-prized possessions. Buying pre-loved
            furniture adds character to your home through its imperfections and
            the stories it carries. We’re here to continue those stories and
            create a world where furniture is circular, sustainable, and here to
            stay.
          </p>
          <button className="rounded-md bg-black text-white mx-auto w-36 h-10 mt-8 text-bold hover:bg-red-600 ease-in duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhySecondFurniture;
