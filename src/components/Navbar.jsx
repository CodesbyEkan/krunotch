import { useState } from "react";
import { handleClick } from "../utils/handleClick";

const Navbar = ({ contactRef, setPage }) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <nav className="fixed bg-transparent w-full h-40 z-50 overflow-auto overscroll-contain">
        <div className="flex justify-end px-[0.8] bg-transparent">
          <div className="relative my-6 mx-6 flex justify-center items-center p-[1.5em] w-16.25 h-16.25 rounded-[50%] overflow-hidden z-50">
            <span className=" absolute w-full h-full bg-zinc-300/20 animate-ping"></span>
            <button
              className="absolute flex justify-center items-center w-12.5 h-12.5 border-none rounded-[50%] bg-zinc-700 cursor-pointer -rotate-35"
              type="button"
              onClick={() => setIsToggled((prevToggle) => !prevToggle)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="45px"
                width="45px"
                viewBox="0 0 30 30"
                className="fill-slate-800 stroke-3 stroke-slate-300"
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
        className={`fixed w-full h-screen flex flex-col items-center z-40 bg-stone-200 overflow-auto overscroll-contain ${isToggled ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="w-full h-screen flex justify-center items-center">
          <ul className="w-full h-full flex flex-col justify-center gap-8 font-makira text-zinc-800 text-center text-xl text-shadow-lg font-bold">
            <li
              data-page="home"
              onClick={(e) => {
                handleClick(e, contactRef, setPage);
                setIsToggled((prevToggle) => !prevToggle);
              }}
            >
              HOME
            </li>
            <li
              data-page="portfolio"
              onClick={(e) => {
                handleClick(e, contactRef, setPage);
                setIsToggled((prevToggle) => !prevToggle);
              }}
            >
              PORTFOLIO
            </li>
            <li
              data-page="project"
              onClick={(e) => {
                handleClick(e, contactRef, setPage);
                setIsToggled((prevToggle) => !prevToggle);
              }}
            >
              PROJECTS
            </li>
            <li
              data-page="contact"
              onClick={(e) => {
                handleClick(e, contactRef, setPage);
                setIsToggled((prevToggle) => !prevToggle);
              }}
            >
              CONTACTS
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
