import gsap from 'gsap';
import { div } from 'motion/react-client';
import React, { useEffect } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = React.useState(0);

    
    useEffect(() => {
      window.addEventListener("mousemove", (event) => {
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        let deltaX = mouseX - window.innerWidth / 2; // find x distance
        let deltaY = mouseY - window.innerHeight / 2; // find y distance

        let angle = Math.atan2(deltaY, deltaX); // give angel in radians
        let angle_degree = angle * (180 / Math.PI); // give angel in degree
        
        setRotate(angle_degree - 270);
      });
    }, []);


  return (
    <div  data-scroll data-scroll-section data-scroll-speed="6750" >

    <div className=" flex items-center justify-center w-full h-[80vh] min-w-[320px] min-h-[250px] bg-[url('/bg.jpeg')] bg-cover sm:w-full sm:rounded-none lg:hover:w-full lg:hover:h-[80vh] lg:hover:rounded-none lg:transition-all" 
        >
      <div className=" w-[60vw] min-w-[320px]: h-[25vw]  flex items-center justify-center gap-5 sm:w-[45vw] sm:h-[20vw] " 
       >
        <div className="flex items-center justify-center bg-zinc-50 rounded-full w-[33vw] h-[33vw] sm:w-[20vw] sm:h-[20vw]">
          <div className="w-2/3 h-2/3 rounded-full bg-slate-900 flex items-center justify-center">
            <div className="w-1/3 h-full left-eye" style={{ transform: `rotate(${rotate}deg)` }}>
              <div className="w-full h-1/3 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-zinc-50 rounded-full w-[33vw] h-[33vw] sm:w-[20vw] sm:h-[20vw]">
          <div className="w-2/3 h-2/3 rounded-full bg-slate-900 flex items-center justify-center">
            <div className="w-1/3 h-full right-eye" style={{ transform: `rotate(${rotate}deg)` }}>
              <div className="w-full h-1/3 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


export default Eyes