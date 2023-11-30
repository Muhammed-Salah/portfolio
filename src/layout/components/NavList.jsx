import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const NavItem = ({ to, icon, label, target }) => (
    <Link to={to} target={target} className='hover:bg-button-hover rounded-lg flex items-center p-3 hover:outline outline-1 outline-slate-600 transition duration-300'>
      <Icon icon={icon} className='text-lg mr-4 text-secondary' />
      <span className='text-xl'>{label}</span>
    </Link>
);

const NavList = () => {

    return (
        <div className=''>
            <NavItem to="/" icon="teenyicons:home-outline" label="Home" />
            <NavItem to="/about" icon="pajamas:at" label="About" />
            <NavItem to="/projects" icon="bi:box" label="Projects" />
            <NavItem to="https://www.linkedin.com/in/muhammed-salah-kt/" target="_blank" icon="octicon:mail-16" label="Contact" />
        </div>
    );
};
  

export default NavList