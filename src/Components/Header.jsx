import React from 'react'

import logo from "../assets/logo.png"
import MenuIcon from '../utilities/MenuIcon'

export default function Header() {
  return (
    <>
    <header className='flex items-center justify-between p-3 border-b border-[#f1f4f6] md:px-6 lg:px-8 xl:px-10' >

    {/* <img src={logo} alt="Logo" className='mr-4 w-full max-w-[250px] cursor-pointer' /> */}
    <img src={logo} alt="Logo" className="mr-4 sm:max-w-[180px] md:max-w-[220px] lg:max-w-[250px] max-[664px]:max-w-[150px] cursor-pointer"
/>
    <ul className=' items-center text-[rgb(51,59,64)] text-xl md:gap-8 lg:gap-6 xl:gap-12  hidden min-[780px]:flex ' >
        <li className='hover:text-[#1e75ae] hover:underline underline-offset-8 decoration-[rgb(51,59,64)] cursor-pointer'>Features</li>
        <li className='hover:text-[#1e75ae] hover:underline underline-offset-8 decoration-[rgb(51,59,64)] cursor-pointer'>Premium</li>
        <li className='hover:text-[#1e75ae] hover:underline underline-offset-8 decoration-[rgb(51,59,64)] cursor-pointer'>What's New</li>
        <li className='hover:text-[#1e75ae] hover:underline underline-offset-8 decoration-[rgb(51,59,64)] cursor-pointer'>Paper Journals</li>
        <li className='border  text-[#1e75ae] py-2.5 px-11 rounded-[5px] hover:text-[rgb(51,59,64)] cursor-pointer hidden min-[920px]:block'>Get the App</li>
    </ul>
    <button className='max-[780px]:block hidden '><MenuIcon /></button>
    </header>
    </>
  )
}
