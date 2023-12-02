import React from 'react'
import AboutMe from './components/about/AboutMe'
import ToolsSlideshow from './components/about/ToolsSlideshow'

const About = () => {
  return (
    <div className='p-8'>
      <div className='container mx-auto'>
        <h1 className="text-4xl font-semibold my-4">Web Developer, Graphic Designer</h1>
        <AboutMe />

        <ToolsSlideshow />
      </div>
    </div>
  )
}

export default About