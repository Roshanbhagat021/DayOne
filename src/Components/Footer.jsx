import React from 'react'
import logo2 from "../assets/logo2.png"

export default function Footer() {
  return (
    <div className='flex max-w-[1100px] m-auto text-2xl justify-between max-[780px]:text-lg flex-wrap mb-24 p-4 '>
        <p className='text-gray-400'>© Automattic</p>
        <span className='flex text-gray-400 items-center flex-wrap'>Part of the <img src={logo2} alt="logo2" className='mx-2'/> family.</span>
    </div>
  )
}
