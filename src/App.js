/* eslint-disable no-undef */
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Navigate,

} from "react-router-dom";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import WhatToExpect from "./pages/WhatToExpect";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";

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
      case "/projects":
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
      case "/register":
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
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/what-to-expect" element={<WhatToExpect />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to= "/" />} />
    </Routes>
  );
}
export default App;
