import React from 'react'
import pic from '../assets/squarePic.jpg'
import NavList from './components/NavList'

const Sidebar = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
        <img src={pic} className='w-28 rounded-full mb-4' alt="Profile" />
        <h1 className='text-center text-xl font-bold pb-10'>Muhammed Salah K T</h1>
        <NavList />
    </div>
  )
}

export default Sidebar