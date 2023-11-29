import React from 'react'
import { useMediaQuery } from "react-responsive";
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import Skills from './components/home/Skills';
import Slideshow from './components/home/Slideshow';
import Footer from '../layout/Footer';

const Home = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });
    
    return (
        <div  className="flex flex-col">
            <Hero isDesktop={isDesktop}/>

            <Services />

            <Skills />
            
            <Slideshow />

            <Footer />
        </div>
    )
  }

export default Home