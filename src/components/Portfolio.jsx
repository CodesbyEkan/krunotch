import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Portfolio() {
  const { user } = useContext(UserContext);
  return (
    <div className="portfolio">
      <div className="storyline">
        <p>ipsium </p>
      </div>
      <h1 className="my-portfolio">{user}'s Portfolio</h1>
    </div>
  );
}
