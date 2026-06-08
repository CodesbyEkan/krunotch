// import { useContext } from "react";
// import { UserContext } from "./UserContext";

export default function Portfolio() {
  // const { user } = useContext(UserContext);
  return (
    <div className="portfolio relative w-full text-center flex flex-col justify-center items-center">
      <div className="absolute sticky top-8 z-[10] header my-16 text-5xl text-zinc-700 font-makira font-semibold">
        <h1>Services</h1>
      </div>
      <div className="skill-set w-full flex flex-col gap-5 px-12 ">
        <div className="skill-box w-full bg-zinc-950 h-80 rounded-2xl cursor-pointer hover:shadow-lg hover:scale-103"></div>
        <div className="skill-box w-full bg-zinc-950 h-80 rounded-2xl cursor-pointer hover:shadow-lg hover:scale-103"></div>
        <div className="skill-box w-full bg-zinc-950 h-80 rounded-2xl cursor-pointer hover:shadow-lg hover:scale-103"></div>
      </div>
    </div>
  );
}
