import React from 'react';
import { useMediaQuery } from "react-responsive";
import './App.css';
import Sidebar from './layout/sidebar';
import Navbar from './layout/Navbar';
import BodyPart from './BodyPart';
import Footer from './layout/Footer';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <div className='relative overflow-hidden'>
      <div className='fixed bg-primary md:w-72 lg:h-full z-50'>
        {isDesktop ? <Sidebar className='p-4' /> : <Navbar />}
      </div>
      <div className='flex-auto mt-20 lg:mt-0 lg:ml-72 relative'>
        <div>
          <BodyPart />
        </div>
        <div className=''>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
