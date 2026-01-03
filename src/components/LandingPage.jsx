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
    <div className="main-page">
      {/* Profile Picture */}
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
          Hi, I'm Victor ~ a Frontend Developer
          <span id="line">with React. Creating responsive interface</span>
          <span id="line">using stateful components.</span>
        </p>
        <div className="bouncy">
          <button className="explore">
            <Link to="/portfolio">Explore</Link>
          </button>
        </div>
      </div>
      <Portfolio />
      <Project />
      <Contact />
    </div>
  );
}
