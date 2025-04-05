import React from "react";
import Twitter from "../utilities/TwitterIcon";

export default function Review({img,name,username,review}) {
  return (
    <div className=" w-[100%] border border-[#ccc] cursor-pointer rounded-lg min-h-[210px] overflow-hidden p-4">
      <div className="flex bg items-center gap-2 ">
        <img
          className="w-[50px] rounded-full"
          src={img}
          alt={name}
        />
        <div className="flex  w-full justify-between ">
          <div>
            <h2><b>{name}</b></h2>
            <p className="text-[gray] text-[16px]"><b>{username}</b></p>
          </div>
          <div className="w-[16px]">
            <Twitter />
          </div>
        </div>
      </div>
      <div>
        <p className="text-[15px] my-2">
          {review}
        </p>
      </div>
    </div>
  );
}
