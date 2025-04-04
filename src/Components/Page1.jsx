import React from 'react'
import AppStore from "../assets/app-store.svg"
import GooglePlay from "../assets/google-play.svg"
import MacStore from "../assets/mac-app-store.svg"
import MicroSoftStore from "../assets/microsoft-store.png"
import WebApp from "../assets/web-app.svg"


export default function Page1() {
  return (
    <main className='text-[#333b40] text-center'>
        <h1 className='text-7xl mt-40 max-[780px]:text-[54px] max-[780px]:mt-20'>Your journal for life.</h1>
        <h2  className='text-4xl my-16 max-[780px]:text-[24px] max-[780px]:my-8'>The #1 journaling app.</h2>
        <div className=' flex gap-4  justify-center max-[780px]:flex-col items-center'>
            <img className="w-[100%] max-w-[140px]" src={AppStore} alt="" />
            <img className="w-[100%] max-w-[150px]" src={GooglePlay} alt="" />
            <img className="w-[100%] max-w-[165px]" src={MacStore} alt="" />
            <img className="w-[100%] max-w-[150px]" src={MicroSoftStore} alt="" />
            <img className="w-[100%] max-w-[140px]" src={WebApp} alt="" />
        </div>
        <p className='text-[14px] my-8 '>Free to use. Better with <span className='text-[#1e75ae] hover:underline cursor-pointer'>Premium</span>.</p>
        <div className='apple text-xl flex gap-2 flex-wrap items-center justify-center max-[780px]:text-base' style={{color:"rgba(51, 59, 64, 0.5)"}}>
          <p>App of the Year</p>
          <p>Apple Editors’ Choice</p>
          <p>Apple Design Award</p>
        </div>
    </main>
  )
}
