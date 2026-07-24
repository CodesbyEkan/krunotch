import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import Project from "./Project";
import Contact from "./Contact";
import { useContext } from "react";
import { UserContext } from "./UserContext";

import { useRef } from "react";

export default function LandingPage() {
  const sectionRef = useRef(null);

  const scrollToSection = (ref) => {
    console.log(ref.current.dataset.active);
    const yOffset = -80;
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
    // ref.current.ScrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
  };
  const { user } = useContext(UserContext);
  // console.log(`The user is: ${user}`);
  return (
    <>
      <div className="h-screen relative pt-30">
        <div className="absolute z-1 w-full h-full animate-swipe">
          <div className="bg-red-600 fixed top-53 w-[50px] bg-transparent flex flex-col justify-center items-center gap-[3vh] visible z-[9]">
            <div
              onClick={() => scrollToSection(sectionRef)}
              data-active=""
              className="relative w-[12px] h-[12px] flex justify-center items-center rounded-[30px] bg-zinc-600/55 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-600/75 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-150 before:rounded-[30px] before:z-[-1]"
            ></div>
            <div
              data-active=""
              className="relative w-[12px] h-[12px] flex justify-center items-center rounded-[30px] bg-zinc-600/55 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-600/75 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:rounded-[30px] before:z-[-1]"
            ></div>
            <div
              data-active="true"
              className="relative w-[12px] h-[12px] flex justify-center items-center rounded-[30px] bg-zinc-600/55 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-600/75 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-150 before:rounded-[30px] before:z-[-1]"
            ></div>
            <div
              data-active=""
              className="relative w-[12px] h-[12px] flex justify-center items-center rounded-[30px] bg-zinc-600/55 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-600/75 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-150 before:rounded-[30px] before:z-[-1]"
            ></div>
            <div
              data-active=""
              className="relative w-[12px] h-[12px] flex justify-center items-center rounded-[30px] bg-zinc-600/55 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-600/75 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-150 before:rounded-[30px] before:z-[-1]"
            ></div>
          </div>
          <div className="anim-container flex justify-center items-center">
            <div className="relative my-[3em] mx-auto h-[288px] w-[288px] border-2 border-dotted border-zinc-500 rounded-full p-[4em] animate-spin"></div>
            <div className="profile-pic bg-[url('./assets/userpics.jpg')] bg-cover bg-center absolute h-[260px] w-[260px] rounded-full tracking-widest shadow-xl shadow-zinc-500/50"></div>
          </div>

          <div className="relative flex flex-col justify-center items-center">
            <div className="flex">
              <h1 className="relative my-[0] mx-auto w-[0] overflow-hidden whitespace-nowrap text-[1.9rem] text-zinc-700 font-makira font-bold uppercase border-r-6 border-zinc-800 text-shadow-lg leading-snug animate-typewriter hover:animate-typewriter cursor-pointer">
                <span className="font-light">&#123;</span> Ekanem Victor{user}
                <span className="font-light"> &#125;</span>
              </h1>
            </div>
            <p className="text-[1.2rem] text-zinc-600 font-light tracking-wide uppercase">
              &lt; Fullstack Engineer &#47;&gt;
            </p>
            <p className="w-90 mt-2 text-[1.05rem] tracking-wide text-center text-zinc-500">
              I build optimized, reliable, scalable web services. Converting
              ideas into clean UI, with real results using tools such as React,
              NextJS, Node.js, Express, Tailwind.
            </p>
            <div className="cta-box relative mt-[2em] flex justify-between items-center w-5/8">
              <div className="explores">
                <button className="py-[0.3em] px-[1.6em]  bg-zinc-800 text-zinc-100 text-lg shadow-lg rounded-lg font-bold cursor-pointer hover:bg-zinc-700">
                  <Link to="/portfolio">Explore</Link>
                </button>
              </div>
              <div className="contact">
                <button className="explore py-[0.3em] px-[1.6em]  bg-zinc-800 text-zinc-100 text-lg shadow-lg  rounded-lg font-bold cursor-pointer hover:bg-zinc-700">
                  <Link to="/contact">Contact</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Portfolio ref={sectionRef} />
        <Project />
        <Contact />
      </div>
    </>
  );
}
