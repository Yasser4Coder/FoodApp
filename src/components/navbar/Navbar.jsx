import React from "react";
import "./navbar.css";
import logo from "../../images/Bella Olonje logo 111 1.png";
import { FaBars } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { padding } from "../../App";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="Navbar h-24" id="navbar">
      <div
        className={`container pt-4 flex items-center justify-between ${padding}`}
      >
        <div className="logo">
          <a href="#navbar"><img src={logo} alt="logo" className="w-28" /></a>
        </div>
        <div className="links hidden md:block md:flex md:items-center md:gap-14">
          <a className="md:text-base md:block md:font-semibold" href="#home">
            Home
          </a>
          <a className="md:text-base md:block md:font-semibold" href="#product">
            Product
          </a>
          <a className="md:text-base md:block md:font-semibold" href="#faq">
            FAQ
          </a>
          <a className="md:text-base md:block md:font-semibold" href="#contact">
            Contact
          </a>
        </div>
        <div className="sidebar md:hidden">
          <FaBars
            onClick={() => setToggleMenu(true)}
            className="sidebar-icon text-3xl w-10"
          />
          {toggleMenu && (
            <div className="sidebar-small flex flex-col gap-20">
              <div className={`container ${padding}`}>
                <RxCrossCircled
                  className="sidebar-close text-4xl w-10 mt-4"
                  onClick={() => setToggleMenu(false)}
                />
                <div className="links-small flex flex-col gap-11 mt-24 items-center">
                  <a
                    onClick={() => setToggleMenu(false)}
                    className="sidebar-link text-xl block text-center font-semibold"
                    href="home"
                  >
                    Home
                  </a>
                  <a
                    onClick={() => setToggleMenu(false)}
                    className="sidebar-link text-xl block text-center font-semibold"
                    href="product"
                  >
                    Product
                  </a>
                  <a
                    onClick={() => setToggleMenu(false)}
                    className="sidebar-link text-xl block text-center font-semibold"
                    href="faq"
                  >
                    FAQ
                  </a>
                  <a
                    onClick={() => setToggleMenu(false)}
                    className="sidebar-link text-xl block text-center font-semibold"
                    href="contact"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
