import { useContext } from "react";
import { MyContext } from "./MyContext";

export default function Project() {
  const { values } = useContext(MyContext);
  return <h1 className="contact">{values}'s Projects</h1>;
}
