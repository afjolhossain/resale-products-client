import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../Assets/Images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className=" font-bold text-neutral-50 max-w-md"
        >
          <h1 className="mb-5 text-5xl font-bold">Hello there !!!!</h1>
          <p className="mb-5 text-4xl">
            The easiest way to
            <br /> buy & sell used furniture
          </p>
          <button className="rounded-md text-neutral-50 mx-auto w-48 h-10 mt-8 hover:bg-red-600 ease-in duration-300">
            <Link to="/about">ABOUT COMPANY</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
