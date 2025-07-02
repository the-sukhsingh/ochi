import React from 'react'

const About = () => {
  return (
    <div className="py-10">
      <div className="border-t-[1px] border-zinc-800">
        <div className="flex flex-wrap p-10 w-full items-center justify-center gap-5">
          <div className="w-[45%] min-w-[320px] flex items-center justify-center gap-5  flex-col-reverse">
            <button className=" w-fit py-3 px-10 flex items-center justify-center gap-10 border-[2px] rounded-3xl border-zinc-600  sm:border-[1.5px] hover:bg-zinc-800 hover:text-zinc-50 ">
              About Me ➤
            </button>
            <h3 className="w-[90%]">
              Our mission is to elevate your message and captivate your audience
              through innovative, tailored presentation designs. We believe that
              every presentation is an opportunity to tell a unique story, and
              we are here to ensure that story is told with clarity, impact, and
              style.
            </h3>
          </div>
          <div className="w-[45%] min-w-[340px] flex items-center justify-center  ">
            <div className="bg-[#bcd560] rounded-2xl w-[40vw] h-[60vh] min-w-[340px] bg-[url('/bg1.jpeg')] bg-[center_left_-1.7rem] bg-no-repeat bg-cover sm:bg-left "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About