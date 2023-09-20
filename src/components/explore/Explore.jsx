import React from "react";
import { padding } from "../../App";
import "./explore.css";
import expimage from "../../images/Rectangle (3).png";
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Explore = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <div className="explore">
      <div className={`container flex flex-col items-center md:flex-row md:justify-between ${padding}`}>
        <div data-aos='zoom-in' className="third-text-element flex flex-col items-center gap-14 md:items-start md:gap-6 md:basis-96">
          <h2 className="text-center text-2xl font-bold md:text-left md:text-xl">
            Explore while shopping
          </h2>
          <h1 className="text-center text-5xl font-bold leading-normal md:text-left md:text-4xl">
            Shop for your favorites meal as e day hot.
          </h1>
          <p className="text-center text-2xl font-medium md:text-left md:text-xl">
            Shop for your favorites meals or drinks and enjoy while doing it.
          </p>
        </div>
        <div data-aos='zoom-in' className="explore-image">
          <img src={expimage} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
