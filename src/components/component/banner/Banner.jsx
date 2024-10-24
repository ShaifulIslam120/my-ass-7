import React from 'react';
import './Banner.css';

const Banner = ({ addCoins }) => {
  return (
    <div className="banner-img flex flex-col items-center justify-center text-center space-y-4">
      <img src="/src/assets/banner-main.png" alt="Cricket Team Banner" className="mx-auto" />
      <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="text-lg">Beyond Boundaries Beyond Limits</p>
      <button 
        className="btn bg-[#E7FE29] w-[180px] py-2 outline outline-[#E7FE29] outline-offset-4"
        onClick={addCoins} // Add this event handler
      >
        Join Now
      </button>
    </div>
  );
};

export default Banner;