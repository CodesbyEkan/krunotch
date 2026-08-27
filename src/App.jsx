import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Project from "./components/Project";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "landingpage",
        element: <LandingPage />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
