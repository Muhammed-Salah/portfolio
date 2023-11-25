import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import './App.css';
import Sidebar from './layout/sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/projects';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Navbar from './layout/Navbar';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <div className='flex text-neutral-300 bg-primary'>
      { isDesktop ? 
        <div className='fixed bg-teritiary w-72 h-full p-4'>
          <Sidebar />
        </div> : <div className='fixed bg-teritiary w-full'>
          <Navbar />
        </div>
      }
       <div className='flex-auto mt-20 lg:mt-0 lg:ml-72 bg-blue-gradient bg-cover'>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/home' element={<About />} />
           <Route path='/projects' element={<Projects />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/*' element={<Error404 />} />
         </Routes>
       </div>
    </div>
  )
}

export default App
