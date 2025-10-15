import { useContext } from "react";
import { MyContext } from "./MyContext";

export default function Portfolio() {
  const { values } = useContext(MyContext);
  return <h1 className="portfolio">{values}'s Portfolio</h1>;
}
