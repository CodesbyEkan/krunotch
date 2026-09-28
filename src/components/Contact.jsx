const Contact = ({ ref }) => {
  return (
    <section
      ref={ref}
      className="bg-zinc-200 relative w-full h-screen my-0 text-center flex flex-col items-center"
    >
      <div className="sticky z-20 flex justify-center">
        <div className="h-40 pt-20 text-[2.2rem] text-zinc-700 font-makira font-semibold">
          Contact.
        </div>
      </div>
      {/* <div className="h-screen">...</div> */}
      <div className="w-full h-full flex flex-col justify-between gap-y-2 mt-2 px-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-center relative px-6 py-6 bg-zinc-700 border border-zinc-500 rounded-2xl backdrop-blur-sm cursor-pointer hover:shadow-lg hover:scale-103">
            <div className="flex flex-col gap-8">
              <h2 className="text-left text-zinc-100 text-[1.65rem] font-makira">
                Let's talk about your project
              </h2>
              <button onClick={()=> console.log("Button clicked!!")} className="w-fit text-left px-6 py-2 bg-zinc-100 text-zinc-800 text-lg font-medium rounded-3xl uppercase cursor-pointer">
                Connect
              </button>
            </div>
          </div>
          <form className="flex flex-col justify-center gap-2 bg-zinc-900/10 px-5 backdrop-blur-sm h-72 w-full border border-zinc-300/70 rounded-2xl">
            <input className="bg-zinc-900/10 py-3 w-full rounded-xl"></input>
            <input className="bg-zinc-900/10 py-3 w-full rounded-xl"></input>
            <input className="bg-zinc-900/10 py-3 w-full h-32 rounded-xl"></input>
          </form>
        </div>
        <footer className="border-t border-t-zinc-700/20 h-16 w-full flex justify-center items-center">
          <p className="text-zinc-700 font-semibold tracking-wide">&copy; 2026</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
