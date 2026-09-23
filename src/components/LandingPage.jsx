import { Link } from "react-router-dom";
import { useRef, useState } from "react";

import Portfolio from "./Portfolio";
import Project from "./Project";
import Contact from "./Contact";
import Sidebar from "./Sidebar";
import Home from "./Home";

export default function LandingPage() {
  const [page, setPage] = useState("home");

  const HomeRef = useRef(null);
  const PortfolioRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null);

  const sectionRefs = {
    home: HomeRef,
    portfolio: PortfolioRef,
    project: ProjectRef,
    contact: ContactRef,
  };

  return (
    <div className="relative overflow-hidden overscroll-contain h-full bg-zinc-950">
      <Sidebar sectionRefs={sectionRefs} page={page} setPage={setPage} />
      <Home ref={HomeRef} />
      <Portfolio
        ref={PortfolioRef}
        contactRef={sectionRefs}
        setPage={setPage}
      />
      <Project ref={ProjectRef} />
      <Contact ref={ContactRef} />
      {/* <div><Home ref={HomeRef} /></div> */}
    </div>
  );
}
