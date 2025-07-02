
const Message = () => {
  return (
    <div className="w-full min-h-screen bg-[#CDEA68] pt-10 rounded-t-[24px] sm:rounded-t-[44px]">
      <div className="py-10 pb-24 px-[7vw] box-border md:px-10 ">
        <h1 className="text-zinc-800 text-[3.9vh] w-full leading-tight tracking-tighter sm:w-[75%] md:text-5xl">
          Ochi is a strategic partner for fast-grow­ing{" "}
          <span className="underline underline-offset-8 hover:underline-offset-2">
            tech businesses
          </span>{" "}
          that need to{" "}
          <span className="underline underline-offset-8 hover:underline-offset-2">
            Raise funds
          </span>
          , sell prod­ucts,{" "}
          <span className="underline underline-offset-8 hover:underline-offset-2">
            Explain complex ideas
          </span>
          , and hire great peo­ple.
        </h1>
      </div>

      <div className="w-full h-full flex items-center justify-center py-5">
        <div className="flex items-center justify-center w-full overflow-hidden sm:w-[80%] sm:rounded-3xl lg:hover:w-full lg:hover:rounded-none lg:transition-all">
          <video
            height="100%"
            width="100%"
            autoPlay
            muted
            loop
            src="https://framerusercontent.com/assets/7MhgjzUDQYO4TwIlhWgp9C76M.mp4"
          ></video>
        </div>
      </div>

    </div>
  );
};

export default Message;
