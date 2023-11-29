import React from 'react'
import Footer from '../layout/Footer'
import AboutMe from './components/about/AboutMe'

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold m-8">Web Developer, Graphic Designer</h1>

      <AboutMe />
      
      <Footer />
    </div>
  )
}

export default About