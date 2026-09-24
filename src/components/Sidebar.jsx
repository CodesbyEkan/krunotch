// import { useState } from "react";
import { handleClick } from "../utils/handleClick";

const Sidebar = ({ sectionRefs, page, setPage }) => {
  // const [page, setPage] = useState("home");

  // const handleClick = (e) => {
  //   const pageClicked = e.currentTarget.dataset.page;
  //   setPage(pageClicked);
  //   scrollToSection(sectionRefs[pageClicked]);
  //   // console.log(pageClicked);
  // };

  // const scrollToSection = (ref) => {
  //   if (!ref?.current) return;

  //   const yOffset = 0;
  //   const y =
  //     ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //   window.scrollTo({
  //     top: y,
  //     behavior: "smooth",
  //   });
  // };

  // useEffect(() => {
  //   sectionRefs.current.ScrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // }, []);

  return (
    <div className="bg-transparent fixed top-100 w-auto ml-4 flex flex-col justify-center items-center gap-y-5 visible z-30">
      <div
        onClick={(e) => handleClick(e, sectionRefs, setPage)}
        data-page="home"
        data-active={page === "home"}
        className="relative w-2 h-2 flex justify-center items-center rounded-[30px] bg-zinc-500/80 cursor-pointer data-[active=true]:h-10 data-[active=true]:bg-zinc-600 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-100 before:rounded-[30px] before:-z-1"
      ></div>
      <div
        onClick={(e) => handleClick(e, sectionRefs, setPage)}
        data-page="portfolio"
        data-active={page === "portfolio"}
        className="relative w-2 h-2 flex justify-center items-center rounded-[30px] bg-zinc-500/80 cursor-pointer data-[active=true]:h-10 data-[active=true]:bg-zinc-600 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-100 before:rounded-[30px] before:-z-1"
      ></div>
      <div
        onClick={(e) => handleClick(e, sectionRefs, setPage)}
        data-page="project"
        data-active={page === "project"}
        className="relative w-2 h-2 flex justify-center items-center rounded-[30px] bg-zinc-500/80 cursor-pointer data-[active=true]:h-10 data-[active=true]:bg-zinc-600 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-100 before:rounded-[30px] before:-z-1"
      ></div>
      <div
        onClick={(e) => handleClick(e, sectionRefs, setPage)}
        data-page="contact"
        data-active={page === "contact"}
        className="relative w-2 h-2 flex justify-center items-center rounded-[30px] bg-zinc-500/80 cursor-pointer data-[active=true]:h-10 data-[active=true]:bg-zinc-600 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-100 before:rounded-[30px] before:-z-1"
      ></div>
    </div>
  );
};

export default Sidebar;
