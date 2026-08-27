const Project = ({ ref }) => {
  return (
    <section
      ref={ref}
      className="relative h-screen w-full my-0 overflow-y-auto text-center flex flex-col justify-center items-center"
    >
      <div className="absolute sticky flex flex-col gap-4 items-center top-8 text-[2.4rem] text-zinc-700 font-makira font-semibold text-center z-[11]">
        <h1>Projects.</h1>
        <div className="w-80 h-12 border-1 rounded-full"></div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-y-10 pl-8 pr-12 pt-[32em]">
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
