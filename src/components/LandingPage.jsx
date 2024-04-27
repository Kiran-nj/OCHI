import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import bird from "../../public/img/bird.png";
function LandingPage() {
  motion;
  return (
    <div className="w-full h-[87vh] bg-zinc pt-1">
      <div className="textstructure  pt-16 pl-20 ">
        {["WE CREATE", "EYE OPENING", "PRESENTATION"].map((item, index) => (
          <div className="masker ">
            <div className="w-fit flex items-center overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.36, 0, 0.66, -0.56], duration: 1.5 }}
                  className="w-[9vw] h-[4.5vw]  rounded mr-1"
                >
                  <img src={bird} alt="" />
                </motion.div>
              )}
              <h1 className="text-7xl  font-pacifico font-bold">{item}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 ml-4 border-slate-800 mt-32 flex justify-between items-center pt-2 ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-sm ">{item}</p>
        ))}
        <button className="flex items-center gap-1 rounded-full text-sm border-[1px] p-2 border-zinc-800 mr-4  ">
          Start the project <FaArrowRight className="rotate-45" />
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
