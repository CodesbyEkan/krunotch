import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import Project from "./Project";
import Contact from "./Contact";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function LandingPage() {
  const { user } = useContext(UserContext);
  console.log(`The user is: ${user}`);
  return (
    <>
      <div className="landing-page">
        <div className="main-page">
          <div className="anim-container">
            <div className="profile-pic-animation"></div>
            <div className="profile-pic"></div>
          </div>

          <div className="intro">
            <div className="typewriter-div">
              <h1 className="user">Ekanem Victor{user}</h1>
            </div>
            <p className="role">
              <span id="react">React</span> Frontend Developer
            </p>
            <p id="about">
              Hi, so nice having you here😊...
              <span id="line">I'm a frontend developer with react, vast</span>
              <span id="line">experience in creating responsive &</span>
              <span id="line">interactive interface.</span>
            </p>
            <div className="cta-box">
              <div className="explores">
                <button className="explore">
                  <Link to="/portfolio">Explore</Link>
                </button>
              </div>
              <div className="contact">
                <button className="explore">
                  <Link to="/contact">Contact</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Portfolio />
        <Project />
        <Contact />
      </div>
    </>
  );
}
