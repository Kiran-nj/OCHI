import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);

  return (
    <div className="eyes w-full h-[100vh] overflow-hidden">
      {/*       <img
        src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg"
        alt=""
      /> */}
      <div
        data-scroll
        data-scroll-speed="-.9"
        className="w-full relative h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="w-1/2 h-60 flex justify-evenly  gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-white ">
            <div className="w-2/3 relative h-2/3  flex items-center justify-center rounded-full bg-black ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10 "
              >
                <div className="w-10 h-10 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw]  flex items-center justify-center h-[15vw] rounded-full bg-white ">
            <div className="relative w-2/3 h-2/3  flex items-center justify-center rounded-full bg-black ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10 "
              >
                <div className="w-10 h-10 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
