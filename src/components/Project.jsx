import projectImage from "../assets/ekan_vick.png";

const Project = ({ ref }) => {
  return (
    <section
      ref={ref}
      className="relative h-screen w-full bg-taupe-800/60 overflow-y-auto text-center flex flex-col items-center"
    >
      <div className="flex flex-col bg-taupe-900/90 backdrop-blur-2xl sticky top-0 z-10 w-full pt-25 pb-6 border-b border-zinc-300/50 gap-y-4 items-center">
        <div className="flex items-center text-[2.2rem] text-zinc-200 font-makira">
          Projects
        </div>
        <div className="flex items-center justify-start gap-5 bg-taupe-700 overflow-x-auto scrollbar-none w-80 h-12 px-5 ring-1 ring-taupe-700 rounded-full text-zinc-100 font-n text-md">
          <p className="bg-taupe-800 px-5 py-1 ring-1 rounded-full">All</p>
          <p className="bg-taupe-800 px-5 py-1 ring-1 rounded-full">Express</p>
          <p className="bg-taupe-800 px-5 py-1 ring-1 rounded-full">
            Javascript
          </p>
          <p className="bg-taupe-800 px-5 py-1 ring-1 rounded-full">
            TailwindCss
          </p>
          <p className="bg-taupe-800 px-5 py-1 ring-1 rounded-full">
            Typescript
          </p>
          <p className="bg-taupe-800 px-5 py-1 ring-1 rounded-full">React</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-y-10 pl-8 pr-12 py-10">
        <div className="relative flex w-full h-auto">
          <div className="w-1/6">
            <p className="py-6 text-2xl text-taupe-400/70 rotate-90 font-makira">
              GuestPulse
            </p>
          </div>
          <div className="h-[23em] w-5/6 bg-taupe-700 flex flex-col border border-taupe-700 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
            <div className="bg-zinc-300 h-7/13 w-full rounded-t-2xl overflow-clip">
              <img
                src={projectImage}
                alt="Guestpulse Image"
                className="max-w-full h-auto object-cover"
              />
            </div>
            <div className="bg-transparent h-2/13 w-full"></div>
            <div className="border border-taupe-600 h-3/13 w-full"></div>
            <div className="bg-taupe-500 h-1/13 w-3/5 rounded-bl-2xl"></div>
          </div>
        </div>
        <div className="relative flex w-full h-auto">
          <div className="w-1/6">
            <p className="py-6 text-2xl text-taupe-400/70 font-makira rotate-90">
              GuestPulse
            </p>
          </div>
          <div className="h-[23em] w-5/6 bg-taupe-700 flex flex-col border border-taupe-300 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
            <div className="bg-zinc-300 h-7/13 w-full rounded-t-2xl overflow-clip">
              <img
                src={projectImage}
                alt="Guestpulse Image"
                className="max-w-full h-auto object-cover"
              />
            </div>
            <div className="bg-transparent h-2/13 w-full"></div>
            <div className="border border-taupe-600 h-4/13 w-full"></div>
            <div className="bg-taupe-500 h-1/13 w-3/5 rounded-bl-2xl"></div>
          </div>
        </div>
        <div className="relative flex w-full h-auto">
          <div className="w-1/6">
            <p className="py-6 text-2xl text-zinc-400/70 font-makira rotate-90">
              GuestPulse
            </p>
          </div>
          <div className="h-[23em] w-5/6 bg-taupe-700 flex flex-col border border-taupe-300 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
            <div className="bg-taupe-800 h-7/13 w-full rounded-t-2xl overflow-clip">
              <img
                src={projectImage}
                alt="Guestpulse Image"
                className="max-w-full h-auto object-cover"
              />
            </div>
            <div className="bg-transparent h-2/13 w-full"></div>
            <div className="border border-taupe-600 h-4/13 w-full"></div>
            <div className="bg-taupe-500 h-1/13 w-3/5 rounded-bl-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
