import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import './App.css';
import Sidebar from './layout/sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Error404 from './pages/Error404';
import Navbar from './layout/Navbar';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <div className='relative overflow-hidden'>
      <div className='fixed bg-primary md:w-72 lg:h-full z-50'>
        {isDesktop ? <Sidebar className='p-4'/> : <Navbar />}
      </div>
      <div className='flex-auto mt-20 lg:mt-0 lg:ml-72 relative'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </div>
      {/* <div className="bg-blue-gradient bg-cover fixed inset-0 z-0"></div> */}
    </div>
  )
}

export default App
