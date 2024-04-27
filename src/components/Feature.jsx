import React, { useState } from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap";

function Feature() {
  const [isHoveringleft, setIsHoveringLeft] = useState(false);
  const [isHoveringright, setIsHoveringRight] = useState(false);

  return (
    <div className="w-full py-10">
      <div className="w-full px-10 border-b-2 pb-20">
        <h1 className="text-6xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full gap-10 py-28  flex justify-around">
          <div
            onMouseEnter={() => setIsHoveringLeft(true)}
            onMouseLeave={() => setIsHoveringLeft(false)}
            className="cardcontainer relative w-[50%] h-[75vh] rounded-2xl  "
          >
            <h1 className="absolute flex overflow-hidden font-bold z-[9] left-[550px] -translate-x-1/2 top-48 text-7xl ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHoveringleft ? { y: "0" } : { y: "100%" }}
                  transition={{
                    ease: [0.36, 0, 0.66, -0.56],
                    delay: index * 0.3,
                  }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl overflow-hidden  ">
              <img
                className=""
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHoveringRight(true)}
            onMouseLeave={() => setIsHoveringRight(false)}
            className="cardcontainer relative w-[50%] h-[75vh] rounded-2xl   ease-in"
          >
            <h1 className="absolute z-[9] flex overflow-hidden right-[420px] font-bold -translate-x-1/2 top-48 text-7xl ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHoveringright ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.3 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
