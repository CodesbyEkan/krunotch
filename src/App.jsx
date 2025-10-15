import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Login from "./Login";

import { MyProvider } from "./components/MyContext";

function App() {
  return (
    <MyProvider>
      {/* <Navbar /> */}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Navbar />}>
          <Route index element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="landingpage" element={<LandingPage />} />
        </Route>
      </Routes>
    </MyProvider>
  );
}

export default App;
