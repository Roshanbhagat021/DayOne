import React from "react";
import Review from "./Review";

import user1 from "../assets/user1Avtar.png";
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import user4 from "../assets/user4.png"
import user5 from "../assets/user5.png"
import user6 from "../assets/user6.png"

export default function Page5() {
  return (
    <>
      <div className="max-w-[800px] m-auto text-[#333b40] p-4">
        <h1 className="text-5xl mb-4">People ❤️ Day One.</h1>
        <p>
          Over 150,000{" "}
          <span
            key={78}
            className="text-[#1e75ae] hover:underline underline-offset-2 font-bold cursor-pointer"
          >
            5-star reviews.
          </span>
        </p>
      </div>
      <div className="max-w-[1000px] grid max-[780px]:grid-cols-1 grid-cols-2 gap-x-6 gap-y-6 m-auto mt-4  px-4 justify-center">
        <Review
          img={user1}
          name={"Eric E. Britt"}
          username={"@orchestrome"}
          review={
            "A little under two years ago I installed @dayoneapp, initially to keep a pandemic journal. It wasn’t long until I realized how beneficial is to write about my personal life as well! This is my favorite app. I use it everyday, if 72,000 words wasn’t telling enough 😂"
          }
        />
        <Review
          img={user2}
          name={"Todd Utterback"}
          username={"@orchestrome"}
          review={
            "I’ve journaled with @dayoneapp for 10+ years(!!), & I’m currently riding a 1,469 day journaling streak 🌊🏄‍♂️ (thats 4+ years of daily 🖊📸!). It’s an essential app, & there’s no better time to try it out!"
          }
        />
        <Review
          img={user3}
          name={"Julia"}
          username={"@orchestrome"}
          review={
            "Constant source of joy: @dayoneapp’s “On this Day” feature which offers up memories from years past. I’m looking forward to these every day and it’s a great motivator to journal about all the big (and small) things that matter to me on any given day."
          }
        />
        <Review
          img={user4}
          name={"Jason Tabeling"}
          username={"@jtabeling"}
          review={
            "The amount of times I pull out @dayoneappto answer the question…”When did we” or “where were we when” is amazing. 10 years digital yearbook and counting."
          }
        />
        <Review
          img={user5}
          name={"Paul Adkins"}
          username={"@malvrina"}
          review={
            "@dayoneapp 10 years to the day since downloading Day One. 3,857 entries & no days missed!"
          }
        />
        <Review
          img={user6}
          name={"im. THAT.mom"}
          username={"@regemom2020"}
          review={
            "Damn @dayoneapp that text feature is amazing!"
          }
        />
      </div>
    </>
  );
}
