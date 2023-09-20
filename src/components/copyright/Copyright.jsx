import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import footerimage from "../../images/Bella Olonje logo 111 1.png";
import { padding } from "../../App";

const Copyright = () => {
  return (
    <div className="copyright">
      <div className={`container ${padding}`}>
        <div className="scond-part flex flex-col items-center gap-6 md:flex-row md:gap-0 md:justify-between">
          <div className="footer-logo hidden md:block">
          <a href="#navbar"><img src={footerimage} alt="logo" className="w-28" /></a>
          </div>
          <div className="social-links flex gap-6 md:items-center md:justify-between md:gap-20">
            <BsTwitter className="icons" />
            <AiFillFacebook className="icons" />
            <BsLinkedin className="icons" />
          </div>
          <div className="texts">
            <p className="text-center font-bold text-xs">
              Copywright 2022 Bella Onojie.com Yasser B.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
