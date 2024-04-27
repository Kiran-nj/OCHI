import React from "react";
import img from "../../public/img/aq.jpg";

function About() {
  return (
    <div
      /*       data-scroll
      data-scroll-section
      data-scroll-speed=".5" */
      className="w-full py-20 bg-[#CDEA68] px-14 rounded-lg "
    >
      <h1 className="text-5xl text-slate-950 leading-[3.9vw] mb-20 ">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to <span className="underline"> raise funds</span>,
        <span className="underline">sell prod­ucts</span> ,
        <span className="underline">ex­plain com­plex ideas</span>, and
        <span className="underline">hire great peo­ple.</span>
      </h1>
      <div className="w-full  border-[1px] bg-[#10100f] "> </div>
      <div className="w-full flex mt-7">
        <div className="w-1/3  ml-7  ">
          <h1 className=" text-slate-950"> Our Approach: </h1>
          <button className="p-2 ml-2 bg-black from-neutral-50 rounded-2xl mt-3 flex items-center">
            READ MORE
            <div className="w-3 h-3 ml-3 mr-2 rounded-full bg-white"></div>
          </button>
        </div>
        <div className="w-2/2 ">
          <img
            src={img}
            alt=""
            className="w-[600px] h-[400px] rounded-xl ml-24 mt-6"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
