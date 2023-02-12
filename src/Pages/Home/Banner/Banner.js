import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../Assets/Images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  const bg = {
    backgroundImage: `url(${banner})`,
  };
  return (
    <div style={bg} className="banner1 text-center">
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="text-6xl pt-48 font-bold text-neutral-50"
      >
        The easiest way to
        <br /> buy & sell used furniture
      </p>
      <button className="rounded-md text-neutral-50 mx-auto w-36 h-10 mt-8 hover:bg-red-600 ease-in duration-300">
        <Link to="/about">ABOUT COMPANY</Link>
      </button>
    </div>
  );
};

export default Banner;
