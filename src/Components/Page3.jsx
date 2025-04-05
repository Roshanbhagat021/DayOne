import React from "react";
import SampleComponent from "./SampleComponent";
import SampleComponent2 from "./SampleComponent2";

import s1 from "../assets/sample1.png";
import s2 from "../assets/sample2.png";
import s3 from "../assets/sample3.png";
import s4 from "../assets/sample4.png";
import s5 from "../assets/halfLap.png";

export default function Page3() {
  // function createPara(){
  //     return <>

  //     </>
  // }
  const para2 = (
    <>
      Use{" "}
      <span key={78} className="italic text-[#1e75ae] hover:underline underline-offset-2 font-bold cursor-pointer">
        On This Day
      </span>{" "}
      to take a trip back in time. No time machine needed.
    </>
  );
  const para4 = (
    <>
      Protect your journal with{" "}
      <span key={11} className="italic text-[#1e75ae] hover:underline underline-offset-2 font-bold cursor-pointer">
        passcodes and biometric security, end-to-end encryption,
      </span>{" "}

      , and automatic backups with the ability to export your data anytime.
    </>
  );
  const para5 = (
    <>
      An award-winning Day One Mac application.
      <br />
      <span key={10} className="italic text-[#1e75ae] hover:underline underline-offset-2 font-bold cursor-pointer">
        Learn more →
      </span>
    </>
  );

  return (
    <>
      <SampleComponent
        key={5}
        img={s1}
        heading={"Beautiful, award-winning design."}
        para={
          "Focus on your writing with a layout that has everything you need and nothing you don’t."
        }
        direction={"toLeft"}
      />

      <SampleComponent
        key={6}
        img={s2}
        heading={"Quickly revisit moments from the past."}
        para={para2}
        direction={"toRight"}
      />

      <SampleComponent
        key={7}
        img={s3}
        heading={"Tell your story, words optional."}
        para={
          "Add photos, videos, drawings, or audio recordings to bring your journal entries to life."
        }
        direction={"toLeft"}
      />

      <SampleComponent
        key={8}
        img={s4}
        heading={"You own the data, we keep it safe."}
        para={para4}
        direction={"toRight"}
      />

      <SampleComponent2
        key={9}
        img={s5}
        heading={"On your lap and in your pocket."}
        para={para5}
      />
    </>
  );
}
