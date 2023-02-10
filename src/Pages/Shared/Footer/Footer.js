import React from "react";
import { Link } from "react-router-dom";
import faceBook from "../../../Assets/Images/footer-icon/facebook.png";
import instraGram from "../../../Assets/Images/footer-icon/instagram.png";
import twiter from "../../../Assets/Images/footer-icon/twitter.png";
import github from "../../../Assets/Images/footer-icon/github.png";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded">
      <div>
        <h1 className="text-2xl py-4 text-red-700 font-bold">AFJOLRECO</h1>
        <div className="flex gap-4">
          <img className="w-7 h-7" src={faceBook} alt="" />
          <img className="w-7	h-7" src={instraGram} alt="" />
          <img className="w-7	h-7" src={twiter} alt="" />
          <img className="w-7	h-7" src={github} alt="" />
        </div>
        <div className="bg-slate-800 w-1/4 h-1 my-4"></div>
        <div className="grid grid-flow-col gap-4">
          <Link to="/products">About us</Link>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/bedrooms">Bed Room</Link>
          <Link to="/livingrooms">Living Room</Link>
          <Link to="/diningrooms">Dining Room</Link>
          <Link to="/review">Review</Link>
        </div>
      </div>
      <div>
        <p className="text-red-700 font-bold">
          Copyright © 2023 - All right reserved by ACME Industries Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
