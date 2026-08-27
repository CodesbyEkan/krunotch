const Contact = ({ ref }) => {
  return (
    <section
      ref={ref}
      className="relative w-full my-0 text-center flex flex-col justify-center items-center"
    >
      <div className="absolute sticky top-8 z-[10] my-8 text-[2.4rem] text-zinc-700 font-makira font-semibold">
        <h1>Contact.</h1>
      </div>
      <div className="h-[50em]">...</div>
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
      </div>
    </section>
  );
};

export default Contact;
