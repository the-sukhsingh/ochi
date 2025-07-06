import React from "react";

const Projects = () => {
  return (
    <div className="w-full">
      <h2 className=" px-2 pt-10 pb-3 border-b-[2px] border-zinc-800 text-[9vw] md:text-[3vw] sm:border-b-[1px] sm:px-4 tracking-tighter sm:font-semibold font-bold capitalize" 
>
        Featured projects
      </h2>

      <div className=" flex-wrap py-10 w-full flex items-center justify-center gap-5" 
           >
        <div className="w-[45%] min-w-[340px]  flex items-center justify-center bg-[url('/trawa.jpg')] bg-contain bg-no-repeat bg-center bg-zinc-900 rounded-lg overflow-hidden">
          <div className="flex items-center justify-center w-full min-h-[65vh] hover:backdrop-blur-md transition-all overflow-hidden">
            <a className="links">
              <h1 className="mix-blend-multiply text-[5rem] font-bold text-white capitalize ">
                Trawa
              </h1>
            </a>
          </div>
        </div>

        <div className=" w-[45%] min-w-[340px]  min-h-[65vh] flex items-center justify-center bg-[url('/blend.png')] bg-no-repeat bg-contain bg-center bg-zinc-900 rounded-lg overflow-hidden">
          <div className="flex items-center justify-center w-full min-h-[65vh]  hover:backdrop-blur-md transition-all overflow-hidden">
            <a className="links">
              <h1 className=" text-[5rem] mix-blend-saturation font-bold text-white capitalize ">
                Blend
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
