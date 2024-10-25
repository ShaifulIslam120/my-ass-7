import React from 'react';
import './Banner.css';

const Banner = ({ addCoins }) => {
  return (
    <div className="banner-img flex flex-col items-center justify-center text-center space-y-4">
      <img src="https://i.ibb.co.com/WyTKm3M/banner-main.png" alt="Cricket Team Banner" className="mx-auto" />
      <h1 className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="text-lg text-white opacity-[70%]">Beyond Boundaries Beyond Limits</p>
      <button 
        className="btn bg-[#E7FE29] w-[180px] py-2 outline outline-[#E7FE29] outline-offset-4 font-bold text-base"
        onClick={addCoins} // Add this event handler
      >
        Claim Free Credit
      </button>
    </div>
  );
};

export default Banner;