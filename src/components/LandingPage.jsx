import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import { useContext } from "react";
import { MyContext } from "./MyContext";


export default function LandingPage() {
const { values } = useContext(MyContext);

  return (
    <div className="main-page">
      <div className="light">
        <div className="caption">
          <h1>
            Hi there, <span className="user">i'm {values}</span>
            <p className="tagline">
              A Frontend Developer with <span id="react">React</span>
            </p>
          </h1>
          <Link to="/portfolio">
            <button className="explore">Check out my Portfolio</button>
          </Link>
        </div>
      </div>
      <Portfolio />
    </div>
  );
}
