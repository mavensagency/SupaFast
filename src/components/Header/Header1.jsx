import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

function Header1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-[#000000CC] backdrop-blur-[48px] xl:py-6 xl:flex flex-col xl:justify-center justify-start items-center">
        <div className="w-full flex xl:justify-center justify-between xl:px-0 px-3 items-center py-2">
          <div className="logo w-[164px]">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="toggle block xl:hidden">
            <button className='bg-white px-3 py-3 rounded-md text-black' onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon />
            </button>
          </div>
        </div>

        <nav className={`xl:hidden ${isOpen ? 'flex' : 'hidden'} transition-all duration-300 xl:px-0 px-3 py-10 bg-[#1a1919ad] backdrop-blur-[48px] absolute w-full`}>
          <ul className="flex flex-col xl:flex-row gap-4">
            <li>
              <NavLink to="/" className="text-[#ffffff]">Home</NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-[#ffffff]">Case studies</NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-[#ffffff]">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-[#ffffff]">FAQ</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header1;
  