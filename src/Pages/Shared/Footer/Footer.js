import React from "react";
import { Link } from "react-router-dom";
import faceBook from "../../../Assets/Images/footer-icon/facebook.png";
import instraGram from "../../../Assets/Images/footer-icon/instagram.png";
import twiter from "../../../Assets/Images/footer-icon/twitter.png";
import github from "../../../Assets/Images/footer-icon/github.png";
import Logo from "../../../Assets/Images/logo/logo.svg";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-slate-50 text-primary-content mt-16">
      <div className="text-black">
        <img className="mx-auto  w-/12" src={Logo} alt="" />
        <h1 className="text-2xl py-4 text-red-700 font-bold">AFJOLRECO</h1>
        <div className="font-bold ">
          <Link className="ml-4 " to="/">
            Home
          </Link>
          <Link className="ml-4 " to="/about">
            About us
          </Link>
          <Link className="ml-4 " to="/products">
            Products
          </Link>
          <Link className="ml-4 " to="/contactus">
            contact-us
          </Link>
        </div>
        <p className="font-bold text-red-700">
          Copyright © 2023 - All right reserved
        </p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/afjol.hossain.39" target="blank">
            <img className="w-7 h-7 ml-4 " src={faceBook} alt="" />
          </a>
          <a href="https://www.instagram.com/_imon_74/" target="blank">
            <img className="w-7	h-7 ml-4" src={instraGram} alt="" />
          </a>
          <img className="w-7	h-7 ml-4" src={twiter} alt="" />
          <a href="https://github.com/afjolhossain" target="blank">
            <img className="w-7	h-7 ml-4" src={github} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
