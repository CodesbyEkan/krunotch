import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import { useContext } from "react";
import { MyContext } from "./MyContext";

export default function LandingPage() {
  const { values } = useContext(MyContext);

  return (
    <div className="main-page">
      {/* Profile Picture */}
      <div className="anim-container">
        <div className="profile-pic-animation"></div>
        <div className="profile-pic"></div>
      </div>

      <div className="intro">
        <div className="typewriter-div">
          <h1 className="user">EKANEM VICTOR{values}</h1>
        </div>
        <p className="role">
          <span id="react">React</span> Frontend Developer
        </p>
        <p id="about">
          Hi, I'm Victor ~ a Frontend Developer
          <span id="line">with React. Creating responsive interface</span>
          <span id="line">using stateful components.</span>
        </p>
        <button className="explore">
          <Link to="/portfolio">Explore</Link>
        </button>
      </div>
      {/* <Portfolio /> */}
    </div>
  );
}
