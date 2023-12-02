import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Error404 from './pages/Error404';

const BodyPart = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/*' element={<Error404 />} />
            </Routes>
        </>
    )
}

export default BodyPart