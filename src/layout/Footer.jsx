import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white p-8 mt-auto z-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left mb-4 lg:mb-0 lg:w-9/12">
          <p className="text-2xl font-semibold pb-4">Muhammed Salah K T</p>
          <p className="text-sm pb-4">Made By <span className='text-secondary'>Salah</span> | Made Using React | © {currentYear} All rights reserved</p>
          <p className="text-sm">Muhammed Salah K T | Web Developer | Graphics Designer | Kerala, India</p>
          <p className="text-sm">+917012169029 | salahpkd@gmail.com</p>
        </div>

        <div className="flex flex-row lg:flex-col lg:w-3/12 lg:items-end lg:space-y-2 space-x-5">
          <Link to="/about" className='bg-button-hover hover:bg-secondary hover:text-primary rounded-full flex items-center p-2 px-4 hover:outline outline-1 outline-slate-400 duration-500 transition-transform transform-gpu hover:-rotate-12'>
            <span className='text-xl'>About</span>
            <Icon icon='maki:arrow' className='text-lg ml-4' />
          </Link>
          <a href="https://www.linkedin.com/in/muhammed-salah-kt/" target="_blank" rel="noopener noreferrer" className='bg-button-hover hover:bg-secondary rounded-full flex items-center p-2 px-4 hover:outline outline-1 outline-slate-400 duration-500 transition-transform transform-gpu hover:-rotate-12'>
            <span className="text-lg">Contact Me</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
