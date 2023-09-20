import React from "react";
import "./home.css";
import { padding } from "../../App";
const Home = () => {
  return (
    <div className="home" id="home">
      <div className={`container flex flex-col items-center gap-20 pt-16 pb-32 ${padding}`}>
        <div className="text-elements flex flex-col gap-6">
          <p className="text-base pb-2.5 font-bold text-center">Food app</p>
          <h1 className="font-bold py-2.5 text-4xl text-center leading-normal md:leading-relaxed md:text-5xl">
            Why stay hungry when <br /> you can order from Bella Onojie
          </h1>
          <p className="text-center text-2xl font-medium py-2.5">
            Download the bella onojie's food app now on
          </p>
        </div>
        <div className="buttons flex flex-col items-center gap-6 md:flex-row">
          <button className="playstore">Play store</button>
          <button className="appstore">App store</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
