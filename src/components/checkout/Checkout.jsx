import React from "react";
import { padding } from "../../App";
import "./checkout.css";
import cheimage from "../../images/Rectangle (4).png";
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Checkout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <div className="checkout">
      <div className={`container flex flex-col items-center md:flex-row-reverse md:justify-between ${padding}`}>
        <div data-aos='zoom-in' className="fourth-text-elements flex flex-col items-center gap-14 md:gap-6 md:items-start md:basis-96">
          <h2 className="text-center text-2xl font-bold md:text-xl md:text-left">Checkout</h2>
          <h1 className="text-center text-5xl font-bold leading-normal md:text-4xl md:text-left">
            When you done check out and get it delivred.
          </h1>
          <p className="text-center text-2xl font-medium md:text-xl md:text-left">
            When you done check out and get it delivred with ease.
          </p>
        </div>
        <div data-aos='zoom-in' className="checkout-image">
          <img src={cheimage} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
