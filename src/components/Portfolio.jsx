import reactIcon from "../assets/react.svg";
import backendIcon from "../assets/backend.svg";

const Portfolio = ({ ref }) => {
  return (
    <section
      ref={ref}
      className="relative w-full my-0 text-center flex flex-col justify-center items-center"
    >
      <div className="absolute border-zinc-300 sticky top-8 z-[10] header my-8 text-[2.6rem] text-zinc-700 font-makira font-semibold">
        <h1>Services</h1>
      </div>
      <div className="w-full flex flex-col gap-y-20 mt-2 px-12 ">
        <div className="flex flex-col justify-center relative px-6 bg-[var(--bg2)] h-52 border-1 border-zinc-300 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
          <div className="flex flex-col gap-12">
            <h2 className="text-left text-zinc-100 text-[1.75rem] font-makira">
              Let's talk<span className="block">about your project</span>
            </h2>
            <button className="w-fit text-left px-10 py-3 bg-zinc-100 text-zinc-800 text-xl rounded-3xl uppercase cursor-pointer">
              Connect
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center relative px-6 py-[9em] bg-zinc-300/20 h-52 border-1 border-zinc-300 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
          <div className="absolute flex flex-col items-center justify-center bg-white border-1 border-zinc-400 bg-zinc-100 w-[55px] h-[55px] rounded-[50%] top-[-20px] right-[-20px]">
            <img
              className="contrast-1"
              src={reactIcon}
              alt="React icon"
              width={45}
            ></img>
          </div>
          <div className="flex flex-col items-start gap-8">
            <h2 className="text-left text-zinc-800 text-3xl font-makira">
              Frontend Dev.
            </h2>
            <p className="text-left w-60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo accusamus cumque voluptas ab veniam, doloremque rerum
              ratione, sint iure tenetur.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center relative px-6 py-[9em] bg-zinc-300/20 h-52 border-1 border-zinc-300 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
          <div className="absolute flex flex-col items-center justify-center bg-white border-1 border-zinc-400 w-[55px] h-[55px] rounded-[50%] top-[-20px] right-[-20px]">
            <img
              className="contrast-1"
              src={backendIcon}
              alt="React icon"
              width={38}
            ></img>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-left text-zinc-800 text-3xl font-makira">
              Backend Eng.
            </h2>
            <p className="text-left w-60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo accusamus cumque voluptas ab veniam, doloremque rerum
              ratione, sint iure tenetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
