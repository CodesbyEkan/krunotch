import { useState } from "react";

const Sidebar = ({ sectionRefs }) => {
  const [page, setPage] = useState(null);

  //   const sectionRefs = {
  //     home: HomeRef,
  //     portfolio: PortfolioRef,
  //     project: ProjectRef,
  //     contact: ContactRef,
  //   };

  const handleClick = (e) => {
    const myPage = e.currentTarget.dataset.page;
    setPage(myPage);
    console.log(myPage);
    scrollToSection(sectionRefs[myPage]);
  };

  const scrollToSection = (ref) => {
    // console.log(ref.current);
    if (!ref?.current) return;

    const yOffset = 0;
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
  return (
    <div className="bg-transparent fixed top-53 w-[50px] flex flex-col justify-center items-center gap-[3vh] visible z-[9]">
      <div
        onClick={(e) => handleClick(e)}
        data-page="home"
        data-active={page === "home"}
        className="relative w-[18px] h-[18px] flex justify-center items-center rounded-[30px] bg-zinc-600/55 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-600/75 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-100 before:rounded-[30px] before:z-[-1]"
      ></div>
      <div
        onClick={(e) => handleClick(e)}
        data-page="portfolio"
        data-active={page === "portfolio"}
        className="relative w-[18px] h-[18px] flex justify-center items-center rounded-[30px] bg-zinc-600/55 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-600/75 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-100 before:rounded-[30px] before:z-[-1]"
      ></div>
      <div
        onClick={(e) => handleClick(e)}
        data-page="project"
        data-active={page === "project"}
        className="relative w-[18px] h-[18px] flex justify-center items-center rounded-[30px] bg-zinc-600/55 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-600/75 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-100 before:rounded-[30px] before:z-[-1]"
      ></div>
      <div
        onClick={(e) => handleClick(e)}
        data-page="contact"
        data-active={page === "contact"}
        className="relative w-[18px] h-[18px] flex justify-center items-center rounded-[30px] bg-zinc-600/55 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-600/75 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-100 before:rounded-[30px] before:z-[-1]"
      ></div>
      <div
        onClick={(e) => handleClick(e)}
        data-page="skills"
        data-active={page === "skills"}
        className="relative w-[18px] h-[18px] flex justify-center items-center rounded-[30px] bg-zinc-600/55 cursor-pointer data-[active=true]:h-[40px] data-[active=true]:bg-zinc-600/75 before:content-[''] before:absolute before:bg-transparent before:h-full before:w-full before:scale-100 before:rounded-[30px] before:z-[-1]"
      ></div>
    </div>
  );
};

export default Sidebar;
