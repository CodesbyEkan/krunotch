import { useState } from "react";

const Sidebar = ({ sectionRefs }) => {
  const [page, setPage] = useState("home");

  const handleClick = (e) => {
    const pageClicked = e.currentTarget.dataset.page;
    setPage(pageClicked);
    scrollToSection(sectionRefs[pageClicked]);
    console.log(pageClicked);
  };

  const scrollToSection = (ref) => {
    if (!ref?.current) return;

    const yOffset = 0;
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   sectionRefs.current.ScrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // }, []);

  return (
    <div className="bg-transparent fixed top-100 w-auto ml-4 flex flex-col justify-center items-center gap-[3vh] visible z-[9]">
      <div
        onClick={(e) => handleClick(e)}
        data-page="home"
        data-active={page === "home"}
        className="relative w-[14px] h-[14px] flex justify-center items-center rounded-[30px] bg-zinc-800 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-900/70 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-100 before:rounded-[30px] before:z-[-1]"
      ></div>
      <div
        onClick={(e) => handleClick(e)}
        data-page="portfolio"
        data-active={page === "portfolio"}
        className="relative w-[14px] h-[14px] flex justify-center items-center rounded-[30px] bg-zinc-800 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-900/80 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-100 before:rounded-[30px] before:z-[-1]"
      ></div>
      <div
        onClick={(e) => handleClick(e)}
        data-page="project"
        data-active={page === "project"}
        className="relative w-[14px] h-[14px] flex justify-center items-center rounded-[30px] bg-zinc-800 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-900/70 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-100 before:rounded-[30px] before:z-[-1]"
      ></div>
      <div
        onClick={(e) => handleClick(e)}
        data-page="contact"
        data-active={page === "contact"}
        className="relative w-[14px] h-[14px] flex justify-center items-center rounded-[30px] bg-zinc-800 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-900/70 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-100 before:rounded-[30px] before:z-[-1]"
      ></div>
    </div>
  );
};

export default Sidebar;
