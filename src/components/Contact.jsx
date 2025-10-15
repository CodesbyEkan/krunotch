import { useContext } from "react";
import { MyContext } from "./MyContext";

export default function Contact() {
  const { values } = useContext(MyContext);
  return <h1 className="contact">{values}'s Contacts</h1>;
}
