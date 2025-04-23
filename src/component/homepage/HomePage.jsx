import React from 'react'
import SideBar from '../SideBar'
import HomeBody from './HomeBody'
import "./homepage.css";

const HomePage = () => {
  return (
    <div className='w-full flex'>
        <div className='md:w-[20%] w-0'>
            <SideBar className="w-full"/>
        </div>
        <div className='w-full md:w-[84%] md:mt-6 mt-10 p-6'>
            <div className='w-full '>
                <ul className='flex flex-row gap-7 justify-center items-center md:items-start md:justify-start'>
                    <li className='text-lg font-semibold'>Dashboard</li>
                    <li className='text-lg font-semibold'>About us</li>
                    <li className='text-lg font-semibold'>Contact</li>
                </ul>
            </div>
            <HomeBody/>
        </div>
    </div>
  )
}

export default HomePage