import React from 'react';
import './Header.css';

const Header = ({ coin }) => {
  return (
    <div className='header flex items-center justify-between p-4'>
      <div className='logo'>
        <img src="/src/assets/logo.png" alt="Site Logo" className='border-dashed border-4 p-2' />
      </div>
      <div className='nav'>
        <ul className='flex space-x-4'>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <li className='border border-solid border-slate-400 rounded-md p-1'>{coin} coins</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
