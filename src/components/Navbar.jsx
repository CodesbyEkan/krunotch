import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <nav className="fixed bg-white/30 backdrop-blur-sm w-full h-40 z-10">
        <div className="flex justify-end w-full px-[0.8]">
          <div className="relative bg-zinc-300 my-6 mx-6 flex justify-center items-center p-[1.5em] w-[65px] h-[65px] rounded-[50%] overflow-hidden">
            <span className=" absolute w-full h-full bg-zinc-400 animate-pulse [animation-duration-800ms]"></span>
            <button
              className="absolute flex justify-center items-center w-[50px] h-[50px] border-none rounded-[50%] bg-zinc-700 cursor-pointer animate-spin"
              type="button"
              onClick={() => setIsToggled((prevToggle) => !prevToggle)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="45px"
                width="45px"
                viewBox="0 0 30 30"
                className="fill-slate-800 stroke-[3] stroke-slate-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={"0"}
                  d="M7 9h16M4 15h22M7 21h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed w-full h-screen flex flex-col items-center z-50 bg-zinc-50/30 backdrop-blur-sm ${isToggled ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex justify-end w-full">
          <div className="m-l-[1em] text-[2.1rem]">
            <div className="relative bg-slate-400 my-6 mx-6 flex justify-center items-center  w-[70px] h-[70px] rounded-[50%] overflow-hidden">
              <span className=" absolute w-full h-full bg-zinc-400 animate-pulse [animation-duration-800ms]"></span>
              <button
                className="absolute flex justify-center items-center w-[55px] h-[55px] border-none rounded-[50%] bg-zinc-700 cursor-pointer animate-spin"
                type="button"
                onClick={() => setIsToggled((prevToggle) => !prevToggle)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  width="50px"
                  viewBox="0 0 30 30"
                  className="fill-slate-800 stroke-[3] stroke-slate-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={"0"}
                    d="M7 9h16M4 15h22M7 21h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <ul className="w-full h-full flex flex-col justify-center font-makira text-zinc-800 text-center text-4xl text-shadow-lg font-bold py-6">
            <li
              className="my-8"
              onClick={() => setIsToggled((prevToggle) => !prevToggle)}
            >
              <Link className="active" aria-current="page" to="/landingpage">
                HOME
              </Link>
            </li>
            <li
              className="my-8"
              onClick={() => setIsToggled((prevToggle) => !prevToggle)}
            >
              <Link
                className="nav-link active"
                aria-current="page"
                to="/portfolio"
              >
                PORTFOLIO
              </Link>
            </li>
            <li
              className="my-8"
              onClick={() => setIsToggled((prevToggle) => !prevToggle)}
            >
              <Link
                className="nav-link active"
                aria-current="page"
                to="/project"
              >
                PROJECTS
              </Link>
            </li>
            <li
              className="my-8"
              onClick={() => setIsToggled((prevToggle) => !prevToggle)}
            >
              <Link className="nav-link" to="/contact">
                CONTACTS
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
