import "./App.css";
// import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { MyProvider } from "./components/UserContext";
import Login from "./Login";

// const UserContext = createContext();

function App() {
  // const [value, setValue] = useState("Victor");
  return (
    <MyProvider>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route element={<Navbar />}>
          <Route index element={<LandingPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="landingpage" element={<LandingPage />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </MyProvider>
  );
}

export default App;
// export { UserContext };
