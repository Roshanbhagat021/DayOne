import React from "react";
import SampleComponent from "./SampleComponent";
import s1 from "../assets/sample1.png";
import s2 from "../assets/sample2.png";
import s3 from "../assets/sample3.png";
import s4 from "../assets/sample4.png";

export default function Page3() {


    // function createPara(){
    //     return <>
        
    //     </>
    // }
  const para2 = <>
  Use <span className="italic text-[#1e75ae] hover:underline underline-offset-2 font-bold cursor-pointer">On This Day</span> to take a trip back in time. No time machine needed.
  </>
  const para4 = <>
  Protect your journal with <span className="italic text-[#1e75ae] hover:underline underline-offset-2 font-bold cursor-pointer">passcodes and biometric security, end-to-end encryption,</span> , and automatic backups with the ability to export your data anytime.
  </>
    


  return (
    <>
      <SampleComponent
        img={s1}
        heading={"Beautiful, award-winning design."}
        para={
          "Focus on your writing with a layout that has everything you need and nothing you don’t."
        }
        direction={"toLeft"}
      />
      <SampleComponent
        img={s2}
        heading={"Quickly revisit moments from the past."}
        para={
          [para2]
        }
        direction={"toRight"}
      />
      <SampleComponent
        img={s3}
        heading={"Tell your story, words optional."}
        para={
          "Add photos, videos, drawings, or audio recordings to bring your journal entries to life."
        }
        direction={"toLeft"}
      />
      <SampleComponent
        img={s4}
        heading={"You own the data, we keep it safe."}
       para={[para4]}
        direction={"toRight"}
      />
    </>
  );
}
