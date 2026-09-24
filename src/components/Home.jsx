import { Link } from "react-router-dom";
import { handleClick } from "../utils/handleClick";

const Home = ({ ref, contactRef, setPage }) => {
  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center bg-zinc-100 h-screen z-1 w-full animate-swipe"
    >
      <div className="anim-container flex justify-center items-center">
        <div className="relative my-[3em] mx-auto h-72 w-72 border-2 border-dotted border-zinc-500 rounded-full p-[4em] animate-spin"></div>
        <div className="profile-pic bg-[url('./assets/userpics.jpg')] bg-cover bg-center absolute h-65 w-65 rounded-full tracking-widest shadow-xl shadow-zinc-500/50"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center">
        <div className="flex">
          <h1 className="relative my-0 mx-auto w-0 overflow-hidden whitespace-nowrap text-[1.7rem] text-zinc-700 font-makira font-bold uppercase border-r-6 border-zinc-800 text-shadow-lg leading-snug animate-typewriter hover:animate-typewriter cursor-pointer">
            <span className="font-light">&#123;</span> Ekanem Victor
            <span className="font-light"> &#125;</span>
          </h1>
        </div>
        <p className="text-[1rem] text-zinc-600 font-light tracking-wide uppercase">
          &lt; Fullstack Engineer &#47;&gt;
        </p>
        <p className="w-[18.5em] mt-2 text-[.95rem] tracking text-center text-zinc-600">
          I build optimized, reliable, scalable web services. Converting ideas
          into clean UI, with real results using tools such as React, NextJS,
          Node.js, Express, Tailwind.
        </p>
        <div className="relative mt-[2em] flex justify-between items-center w-[19em]">
          <div className="explores">
            <button
              data-page="portfolio"
              onClick={(e) => handleClick(e, contactRef, setPage)}
              className="py-[0.3em] px-[1.6em]  bg-zinc-800 text-zinc-100 text-lg shadow-lg rounded-lg font-bold cursor-pointer hover:bg-zinc-700"
            >
              Explore
              {/* <Link to="/portfolio">Explore</Link> */}
            </button>
          </div>
          <div className="contact">
            <button
              data-page="contact"
              onClick={(e) => handleClick(e, contactRef, setPage)}
              className="explore py-[0.3em] px-[1.6em]  bg-zinc-800 text-zinc-100 text-lg shadow-lg  rounded-lg font-bold cursor-pointer hover:bg-zinc-700"
            >
              Contact
              {/* <Link to="/contact">Contact</Link> */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
