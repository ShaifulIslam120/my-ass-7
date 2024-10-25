import React from 'react';
import './Header.css';

const Header = ({ coin }) => {
  return (
    <div className='header flex items-center justify-between p-4'>
      <div className='logo'>
        <img src="https://i.ibb.co.com/pPfGcp0/logo.png" alt="Site Logo" className='border-dashed border-4 p-2' />
      </div>
      <div className='nav'>
        <ul className='flex space-x-4 font-base text-[#131313B3] opacity-[70%]'>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <li className='border border-solid flex border-slate-400 rounded-md p-1 font-semibold text-black text-base'>{coin} coins <img width="20" height="20" src="https://img.icons8.com/emoji/48/coin-emoji.png" alt="coin-emoji"/></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
