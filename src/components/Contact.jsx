import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Contact() {
  const { user } = useContext(UserContext);
  return <h1 className="contact">{user}'s Contacts</h1>;
}
