import React from "react";
import timeImg from "../assets/timesLogo.png"
import vergeImg from "../assets/verge.png"
import washintonImg from "../assets/washinton.png"
import lifeImg from "../assets/lifeHacker.png"
import NineToFiveImg from "../assets/9to5Mac.png"
import wiredImg from "../assets/wired.png"
import newYorkImg from "../assets/newYorkTimes.png"

function Page2() {
  return (
    <div className="flex items-center flex-col bg-[#f1f4f6] p-10 my-10">
      <div className="flex mt-4 gap-14 opacity-25 items-center justify-between max-[600px]:gap-6 max-[600px]:justify-center w-full max-w-[80%] scale-100 flex-wrap">
        <img className="" src={timeImg} alt="" />
        <img src={vergeImg} alt="" />
        <img src={washintonImg} alt="" />
        <img src={lifeImg} alt="" />
        <img src={NineToFiveImg} alt="" />
        <img src={wiredImg} alt="" />
      </div>
      <p className="italic text-lg text-[#333b40] mt-10 text-center mb-8 before:content-['“'] after:content-['”']">It feels almost sacred: A completely private digital space.</p>
      <img src={newYorkImg} alt="newYork" className="opacity-25" />
    </div>
  );
}

export default Page2;
