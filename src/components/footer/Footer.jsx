import React from 'react';
import './footer.css'
import { padding } from '../../App';


const Footer = () => {
  return (
    <div className='footer'>
      <div className={`container ${padding}`}>
        <div className="first-part flex flex-col items-center gap-14">
            <div className="texts flex flex-col gap-14">
                <h1 className="font-bold text-center text-5xl">Download the app now.</h1>
                <p className="text-center text-2xl font-medium">Most calendars are designed for teams.</p>
            </div>
            <div className="buttons flex gap-6">
                <button className="buy">Buy now</button>
                <button className="try">Try for free</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
