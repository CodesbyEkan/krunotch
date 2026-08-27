import { Link } from "react-router-dom";
import { useRef } from "react";

import Portfolio from "./Portfolio";
import Project from "./Project";
import Contact from "./Contact";
import Sidebar from "./Sidebar";
import Home from "./Home";

export default function LandingPage() {
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
    <div className="relative overflow-hidden overscroll-contain   h-full">
      <Sidebar sectionRefs={sectionRefs} />
      <Home ref={HomeRef} />
      <Portfolio ref={PortfolioRef} />
      <Project ref={ProjectRef} />
      <Contact ref={ContactRef} />
      <div>{/* <Home ref={HomeRef} /> */}</div>
    </div>
  );
}
