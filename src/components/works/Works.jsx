import React from "react";
import { padding } from "../../App";
import "./works.css";
import image from "../../images/Rectangle (6).png";
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Works = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <div className="works">
      <div className={`container flex flex-col items-center gap-9 ${padding}`}>
        <div data-aos="fade-up" className="home-images flex flex-col items-center">
          <img className="works-image" src={image} alt="image" />
        </div>
        <h1 className="text-center text-2xl font-semibold md:text-4xl">
          How the app works
        </h1>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Works;
