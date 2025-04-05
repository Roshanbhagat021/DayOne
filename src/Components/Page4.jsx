import React from "react";
import AppStore from "../assets/app-store.svg"
import GooglePlay from "../assets/google-play.svg"
import MacStore from "../assets/mac-app-store.svg"
import MicroSoftStore from "../assets/microsoft-store.png"
import WebApp from "../assets/web-app.svg"

export default function Page4() {
  return (
    <div className=" text-center bg-gradient-to-b from-[#f1f4f6] to-[rgba(241,244,246,0)] text-[#333b40] max-w-[95%] p-8 mx-auto mt-4 mb-20">
      <h1 className="text-4xl mb-8 ">
        Capture life’s moments, anytime, anywhere.
      </h1>
      <p className=" text-lg/8 mt-4 max-w-[900px] text-left m-auto '">
        Download the free Day One journal app for free on iPhone, Android, iPad,
        Mac, and Apple Watch. Or access your Day One Journal from any browser.
      </p>
      <div className=" flex gap-4 justify-center flex-wrap items-center my-8">
        <img className="w-[100%] max-w-[120px]" src={AppStore} alt="" />
        <img className="w-[100%] max-w-[130px]" src={GooglePlay} alt="" />
        <img className="w-[100%] max-w-[145px]" src={MacStore} alt="" />
        <img className="w-[100%] max-w-[120px]" src={WebApp} alt="" />
      </div>
    </div>
  );
}
