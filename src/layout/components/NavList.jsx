import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const NavItem = ({ to, icon, label, target, onClick }) => (
  <Link
    to={to}
    target={target}
    className='hover:bg-button-hover rounded-lg flex items-center p-3 hover:outline outline-1 outline-slate-600 transition duration-300'
    onClick={onClick}
  >
    <Icon icon={icon} className='text-lg mr-4 text-secondary' />
    <span className='text-xl'>{label}</span>
  </Link>
);

const NavList = ({ onClose }) => {
  const handleItemClick = () => {
    // Close the dropdown when an item is clicked
    onClose();
  };

  return (
    <div className=''>
      <NavItem to="/" icon="teenyicons:home-outline" label="Home" onClick={handleItemClick} />
      <NavItem to="/about" icon="pajamas:at" label="About" onClick={handleItemClick} />
      <NavItem to="/projects" icon="bi:box" label="Projects" onClick={handleItemClick} />
      <NavItem to="https://www.linkedin.com/in/muhammed-salah-kt/" target="_blank" icon="octicon:mail-16" label="Contact" onClick={handleItemClick} />
    </div>
  );
};

export default NavList;
