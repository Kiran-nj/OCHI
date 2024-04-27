import React from "react";
import { motion } from "framer-motion";

function Marque() {
  return (
    /* framermotiion scrolling */
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full h-[60vh] bg-emerald-900 pt-7  rounded-xl"
    >
      <div className="text py-5  border-l-slate-700 flex border-t-2 border-b-2 whitespace-nowrap items-center ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[17vw] leading-none pl-10 font-bold"
        >
          WE ARE OCHI
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[17vw] leading-none pl-10 font-bold"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Marque;
