import projectImage from "../assets/ekan_vick.png";

const Project = ({ ref }) => {
  return (
    <section
      ref={ref}
      className="relative h-screen w-full bg-zinc-900 overflow-y-auto text-center flex flex-col items-center"
    >
      <div className="flex flex-col bg-zinc-100/10 backdrop-blur-2xl sticky top-0 z-10 w-full pt-25 pb-6 border-b border-zinc-300/50 gap-y-4 items-center">
        <div className="flex items-center text-[2.2rem] text-zinc-200 font-makira">
          Projects
        </div>
        <div className="flex items-center justify-start gap-5 bg-zinc-700 overflow-x-auto scrollbar-none w-80 h-12 px-5 ring-1 ring-zinc-400 rounded-full text-zinc-100 font-n text-md">
          <p className="px-5 py-1 ring-1 rounded-full">All</p>
          <p className="px-5 py-1 ring-1 rounded-full">Express</p>
          <p className="px-5 py-1 ring-1 rounded-full">Javascript</p>
          <p className="px-5 py-1 ring-1 rounded-full">TailwindCss</p>
          <p className="px-5 py-1 ring-1 rounded-full">Typescript</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-y-10 pl-8 pr-12 py-10">
        <div className="relative flex w-full h-auto">
          <div className="w-1/6">
            <p className="py-2 text-2xl text-zinc-100/70 rotate-90">
              GuestPulse
            </p>
          </div>
          <div className="h-[23em] w-5/6 bg-zinc-950 flex flex-col border border-zinc-300 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
            <div className="bg-zinc-300 h-7/13 w-full rounded-t-2xl overflow-clip">
              <img
                src={projectImage}
                alt="Guestpulse Image"
                className="max-w-full h-auto object-cover"
              />
            </div>
            <div className="bg-zinc-700 h-2/13 w-full"></div>
            <div className="bg-zinc-600 h-3/13 w-full"></div>
            <div className="bg-zinc-500 h-1/13 w-3/5 rounded-bl-2xl"></div>
          </div>
        </div>
        <div className="relative flex w-full h-auto">
          <div className="w-1/6">
            <p className="py-2 text-3xl text-zinc-600 font-makira rotate-90">
              GuestPulse
            </p>
          </div>
          <div className="h-[23em] w-5/6 bg-zinc-700 flex flex-col border border-zinc-300 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
            <div className="bg-zinc-300 h-6/13 w-full rounded-t-2xl overflow-clip">
              <img
                src={projectImage}
                alt="Guestpulse Image"
                className="max-w-full h-auto object-cover"
              />
            </div>
            <div className="bg-zinc-700 h-2/13 w-full"></div>
            <div className="bg-zinc-600 h-4/13 w-full"></div>
            <div className="bg-zinc-500 h-1/13 w-3/5 rounded-bl-2xl"></div>
          </div>
        </div>
        <div className="relative flex w-full h-auto">
          <div className="w-1/6">
            <p className="py-2 text-3xl text-zinc-600 font-makira rotate-90">
              GuestPulse
            </p>
          </div>
          <div className="h-[23em] w-5/6 bg-zinc-700 flex flex-col border border-zinc-300 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
            <div className="bg-zinc-300 h-6/13 w-full rounded-t-2xl overflow-clip">
              <img
                src={projectImage}
                alt="Guestpulse Image"
                className="max-w-full h-auto object-cover"
              />
            </div>
            <div className="bg-zinc-700 h-2/13 w-full"></div>
            <div className="bg-zinc-600 h-4/13 w-full"></div>
            <div className="bg-zinc-500 h-1/13 w-3/5 rounded-bl-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
