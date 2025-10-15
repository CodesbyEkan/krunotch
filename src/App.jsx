import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Login from "./Login";

import { MyProvider } from "./components/MyContext";

function App() {
  return (
    <MyProvider>
      <Routes>
        {/* <Route index element={<Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route element={<Navbar />}>
          {/* <Route index element={<Login />} /> */}
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
