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
      <div className="w-full h-full flex flex-col justify-between gap-y-2 mt-10 px-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-zinc-700 text-[1.7rem] font-makira uppercase">
            Send a message!!
          </h2>
          <form className="flex flex-col items-center justify-center gap-6 bg-zinc-900/30 px-5 backdrop-blur-sm h-100 w-full border border-zinc-300/70 rounded-2xl">
            <input className="bg-zinc-100/40 py-3 px-3 w-full rounded-xl  placeholder: focus-within:outline-1 focus:outline-zinc-700"></input>
            <input className="bg-zinc-100/40 py-3 px-3 w-full rounded-xl focus-within:outline-1 focus:outline-zinc-700"></input>
            <textarea className="bg-zinc-100/40 py-3 px-3 w-full h-32 rounded-xl focus-within:outline-1 focus:outline-zinc-700"></textarea>
            <button
              type="submit"
              className="w-4/6 bg-zinc-200 text-zinc-600 px-2 py-2 rounded-2xl font-semibold"
            >
              Drop Message
            </button>
          </form>
        </div>
        <footer className="border-t border-t-zinc-700/20 h-16 w-full flex justify-center items-center">
          <p className="text-zinc-700 font-semibold tracking-wide">
            &copy; 2026
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
