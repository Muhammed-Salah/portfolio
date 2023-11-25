import React from 'react'
import { useMediaQuery } from "react-responsive";
import fullsizepic from '../assets/nobgpic.png'
import { Icon } from '@iconify/react'

const Home = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    
    return (
      <div className="flex items-center h-full">
          <div className="flex flex-col text-left md:p-14 p-8">
            <h1 className=''>Hello</h1>
            <h1 className="text-3xl md:text-4xl mb-2">I'm</h1>
            <h1 className="text-5xl md:text-6xl mb-2"> Muhammed Salah K&nbsp;T </h1>

            <span className="block w-1/4 h-px bg-secondary mt-2"></span>

            <p className="text-sm md:text-lg mb-4 mt-2">Motivational trainer, Web developer, Mentor, Graphic Designer</p>
            
            <button className="bg-secondary text-primary py-2 px-4 rounded-lg flex items-center w-fit">
                <Icon icon="basil:cloud-download-outline" className="mr-2" /> Download CV
            </button>
          </div>
          { isDesktop && <img src={fullsizepic} alt="Profile" className="w-96 h-auto ml-1 mt-36" />}
      </div>
    )
  }

export default Home