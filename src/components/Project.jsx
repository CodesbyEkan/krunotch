const Project = ({ ref }) => {
  return (
    <section
      ref={ref}
      className="relative h-screen w-full bg-zinc-900 z-30 overflow-y-auto text-center flex flex-col items-center"
    >
      <div className="flex flex-col w-full pt-25 pb-6 border-b-1 border-zinc-300/50 gap-y-4 items-center">
        <div className="sticky z-20 flex items-center text-[2.4rem] text-zinc-700 font-makira">
          Projects
        </div>
        <div className="w-65 h-11 ring-1 ring-zinc-400 rounded-full"></div>
      </div>
      <div className="w-full flex flex-col items-center gap-y-10 pl-8 pr-12 py-10">
        <div className="relative flex w-full h-auto">
          <div className="w-1/6">
            <p className="py-2 text-3xl text-zinc-600 font-makira rotate-90">
              GuestPulse
            </p>
          </div>
          <div className="h-[23em] w-5/6 bg-zinc-700 flex flex-col border-1 border-zinc-300 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
            <div className="bg-zinc-300 h-6/13 w-full rounded-t-2xl overflow-clip">
              <img
                src="https://picsum.photos/200/200?grayscale"
                alt="Guestpulse Image"
                className="max-w-full h-auto object-cover"
              />
            </div>
            <div className="bg-zinc-400 h-2/13 w-full"></div>
            <div className="bg-zinc-500 h-4/13 w-full"></div>
            <div className="bg-zinc-300 h-1/13 w-3/5 rounded-bl-2xl"></div>
          </div>
        </div>
        <div className="relative flex w-full h-auto">
          <div className="w-1/6">
            <p className="py-2 text-3xl text-zinc-600 font-makira rotate-90">
              GuestPulse
            </p>
          </div>
          <div className="h-[23em] w-5/6 bg-zinc-700 flex flex-col border-1 border-zinc-300 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
            <div className="bg-zinc-300 h-6/13 w-full rounded-t-2xl overflow-clip">
              <img
                src="https://picsum.photos/200/200?grayscale"
                alt="Guestpulse Image"
                className="max-w-full h-auto object-cover"
              />
            </div>
            <div className="bg-zinc-400 h-2/13 w-full"></div>
            <div className="bg-zinc-500 h-4/13 w-full"></div>
            <div className="bg-zinc-300 h-1/13 w-3/5 rounded-bl-2xl"></div>
          </div>
        </div>
        <div className="relative flex w-full h-auto">
          <div className="w-1/6">
            <p className="py-2 text-3xl text-zinc-600 font-makira rotate-90">
              GuestPulse
            </p>
          </div>
          <div className="h-[23em] w-5/6 bg-zinc-700 flex flex-col border-1 border-zinc-300 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
            <div className="bg-zinc-300 h-6/13 w-full rounded-t-2xl overflow-clip">
              <img
                src="https://picsum.photos/200/200?grayscale"
                alt="Guestpulse Image"
                className="max-w-full h-auto object-cover"
              />
            </div>
            <div className="bg-zinc-400 h-2/13 w-full"></div>
            <div className="bg-zinc-500 h-4/13 w-full"></div>
            <div className="bg-zinc-300 h-1/13 w-3/5 rounded-bl-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
