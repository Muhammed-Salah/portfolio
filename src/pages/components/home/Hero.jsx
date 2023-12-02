import React from 'react';
import fullsizepic from '/assets/nobgpic.png';
import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center h-screen relative bg-blue-gradient bg-cover inset-0 '>
      <div className="container my-auto">
        {/* <div className="md:w-8/12"> */}
          <h1 className='absolute font-bold hidden sm:block sm:text-[150px] md:text-[190px] lg:text-[220px] xl:text-[250px] opacity-20 z-0 left-4 top-[-30px] md:top-[-40px] select-none'>
            HELLO
          </h1>
          <div className="flex flex-col text-left p-8 md:pt-40">
            <h1 className="text-4xl md:text-5xl mb-2 z-20">I'm</h1>
            <h1 className="text-5xl md:text-6xl mb-2 z-20">Muhammed Salah K&nbsp;T</h1>
            <span className="block w-1/4 h-px bg-secondary mt-2 z-20"></span>
            <p className="text-sm md:text-lg mb-4 mt-2 z-20">Web developer, Graphic Designer, Mentor</p>
            <a href='https://drive.google.com/file/d/1W5UDSHsPSm3KXrfq4BQfSTfezLDu-XH2/view?usp=sharing' target='_blank' rel='noopener noreferrer' className=' z-20'>
              <button className="bg-secondary text-primary py-2 px-4 rounded-lg flex items-center w-fit">
                <Icon icon="basil:cloud-download-outline" className="mr-2 text-2xl" /> Download CV
              </button>
            </a>
          </div>
        {/* </div> */}

        {/* <div className="absolute md:right-2 bottom-0 flex justify-center">
          <img src={fullsizepic} alt="Profile" className="w-96 opacity-50 sm:opacity-100 md:w-[26rem] 2xl:w-[28rem] h-auto ml-1 mt-0 z-10" />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
