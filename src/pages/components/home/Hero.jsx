import React from 'react';
import fullsizepic from '/assets/nobgpic.png';
import { Icon } from '@iconify/react';

const Hero = ({ isDesktop }) => {
  return (
    <div className="flex items-center h-full relative bg-blue-gradient bg-cover inset-0 z-0">
      <h1 className='absolute font-bold hidden sm:block sm:text-[150px] md:text-[190px] lg:text-[220px] xl:text-[250px] opacity-20 z-0 sm:left-32 left-20 top-[-30px] md:top-[-10px]'>HELLO</h1>
      <div className="flex flex-col text-left md:p-14 p-8 md:pt-40 pt-28">
        <h1 className="text-4xl md:text-5xl mb-2">I'm</h1>
        <h1 className="text-5xl md:text-6xl mb-2">Muhammed Salah K&nbsp;T</h1>
        <span className="block w-1/4 h-px bg-secondary mt-2"></span>
        <p className="text-sm md:text-lg mb-4 mt-2">Web developer, Graphic Designer, Mentor</p>
        <button className="bg-secondary text-primary py-2 px-4 rounded-lg flex items-center w-fit">
          <Icon icon="basil:cloud-download-outline" className="mr-2 text-2xl" /> Download CV
        </button>
      </div>
      {isDesktop && (
        <img src={fullsizepic} alt="Profile" className="w-[20rem] xl:w-[24rem] 2xl:w-[28rem] h-auto ml-1 mt-14 z-10" />
      )}
    </div>
  );
};

export default Hero;
