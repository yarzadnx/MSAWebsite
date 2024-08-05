import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Calendar from "./pages/Calendar";
import Admin from "./pages/Admin";
import GroupMe from "./pages/GroupMe"; // Import the Admin component

import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("JMU MSA - Connecting Communities, Empowering Minds");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/admin" element={<Admin />} />{" "}
            <Route path="/joinGroupMe" element={<GroupMe />} />{" "}
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
