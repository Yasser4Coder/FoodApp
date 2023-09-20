import React from "react";
import { padding } from "../../App";
import "./login.css";
import logimage from "../../images/Rectangle (2).png";
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Login = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <div className="login">
      <div className={`container flex flex-col items-center md:flex-row-reverse md:flex md:justify-between ${padding}`}>
        <div data-aos='zoom-in' className="second-text-elements flex flex-col items-center gap-14 md:gap-6 md:items-start md:basis-96">
          <h2 className="text-center text-2xl font-bold md:text-left md:text-xl">Create an account</h2>
          <h1 className="text-center text-5xl font-bold leading-normal md:leading-relaxed md:text-left md:text-4xl">
            Create/login to an existing account to get started
          </h1>
          <p className="text-center text-2xl font-medium md:text-left md:text-xl">
            An account is created with your email and a desired password
          </p>
        </div>
        <div data-aos='zoom-in' className="login-image">
          <img src={logimage} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
