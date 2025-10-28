import { useContext } from "react";
import { MyContext } from "./MyContext";

export default function Portfolio() {
  const { values } = useContext(MyContext);
  return (
    <div className="portfolio">
      <div className="storyline">
        <p>ipsium </p>
      </div>
      <h1 className="my-portfolio">{values}'s Portfolio</h1>
    </div>
  );
}
