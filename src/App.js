import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Services from "./pages/Services";
import Desktop2 from "./pages/Home";
import FAQ from "./pages/FAQ";
import WhatToExpect from "./pages/WhatToExpect";
import AboutUs from "./pages/AboutUs";
import Project from "./pages/Project";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/faq":
        title = "";
        metaDescription = "";
        break;
      case "/what-to-expect":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/project":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Services />} />
      <Route path="/home" element={<Desktop2 />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/what-to-expect" element={<WhatToExpect />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}
export default App;
