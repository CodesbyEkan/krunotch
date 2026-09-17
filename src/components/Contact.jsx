const Contact = ({ ref }) => {
  return (
    <section
      ref={ref}
      className="relative w-full h-screen my-0 text-center flex flex-col items-center"
    >
      <div className="sticky z-20 flex justify-center">
        <div className="h-40 pt-20 text-[2.2rem] text-zinc-700 font-makira font-semibold">
          Contact.
        </div>
      </div>
      {/* <div className="h-screen">...</div> */}
      <div className="w-full h-full flex flex-col justify-between gap-y-20 mt-2 px-12 ">
        <div className="flex flex-col justify-center relative px-6 bg-(--bg2) h-52 border border-zinc-300 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
          <div className="flex flex-col gap-12">
            <h2 className="text-left text-zinc-100 text-[1.75rem] font-makira">
              Let's talk<span className="block">about your project</span>
            </h2>
            <button className="w-fit text-left px-10 py-3 bg-zinc-100 text-zinc-800 text-xl rounded-3xl uppercase cursor-pointer">
              Connect
            </button>
          </div>
        </div>
        <footer className="border-t border-t-zinc-700/20 h-20 w-full flex justify-center items-center">
          <p className="text-zinc-700">2026</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
