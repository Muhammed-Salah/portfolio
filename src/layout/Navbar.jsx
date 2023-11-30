import React, { useState, useRef, useEffect } from 'react';
import pic from '/assets/squarePic.jpg';
import NavList from './components/NavList';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [isNavListCollapsed, setIsNavListCollapsed] = useState(true);
  const [navListHeight, setNavListHeight] = useState(0);
  const navListRef = useRef(null);

  useEffect(() => {
    setNavListHeight(isNavListCollapsed ? 0 : navListRef.current.scrollHeight);
  }, [isNavListCollapsed]);

  const toggleNavList = () => {
    setIsNavListCollapsed(!isNavListCollapsed);
  };

  const closeNavList = () => {
    setIsNavListCollapsed(true);
  };

  return (
    <div className='fixed bg-primary w-full p-2'>
      <div className='relative flex items-center justify-between px-2 pb-2'>
        <img src={pic} className='w-14 rounded-full cursor-pointer p-1' alt="Profile" onClick={toggleNavList} />

        {isNavListCollapsed ? (
          <Icon icon={'ion:menu'} className='text-3xl cursor-pointer transition-all duration-300' onClick={toggleNavList} />
        ) : (
          <Icon icon={'ion:close'} className='text-3xl cursor-pointer transition-all duration-300' onClick={toggleNavList} />
        )}
      </div>

      <div
        ref={navListRef}
        className='overflow-hidden transition-all duration-300 outline outline-1 outline-slate-700 rounded-lg'
        style={{ height: navListHeight }}
      >
        <NavList onClose={isNavListCollapsed} />
      </div>
    </div>
  );
};

export default Navbar;
