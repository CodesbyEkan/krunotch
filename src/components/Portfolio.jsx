// import { useContext } from "react";
// import { UserContext } from "./UserContext";

const Portfolio = ({ ref }) => {
  // const { user } = useContext(UserContext);
  return (
    <section
      ref={ref}
      className="relative w-full my-0 text-center flex flex-col justify-center items-center"
    >
      <div className="absolute sticky top-8 z-[10] header my-8 text-5xl text-zinc-700 font-makira font-semibold">
        <h1>Services</h1>
      </div>
      <div className="w-full flex flex-col gap-y-20 mt-20 px-12">
        <div className="flex flex-col relative px-12 bg-zinc-300/20 h-70 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
          <div className="absolute bg-zinc-800 w-[70px] h-[70px] rounded-[50%] top-[-20px] right-[-20px]"></div>
          <h2 className="text-left text-zinc-800 text-3xl font-makira mt-18">
            Let's talk<span className="block">about your project</span>
          </h2>
          <button className="w-fit text-left px-10 py-3 bg-zinc-800 rounded text-white text-xl mt-10 rounded-3xl uppercase cursor-pointer">
            Connect
          </button>
        </div>
        <div className="flex flex-col relative px-12 bg-zinc-300/20 h-70 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
          <div className="absolute bg-zinc-800 w-[70px] h-[70px] rounded-[50%] top-[-20px] right-[-20px]"></div>
          <h2 className="text-left text-zinc-800 text-3xl font-makira mt-18">
            Frontend Developer
          </h2>
        </div>
        <div className="flex flex-col relative px-12 bg-zinc-300/20 h-70 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
          <div className="absolute bg-zinc-800 w-[70px] h-[70px] rounded-[50%] top-[-20px] right-[-20px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
