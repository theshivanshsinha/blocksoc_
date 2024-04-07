import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Contact from "./components/Contact/Contact";
import Events from "./components/Events/Events";
import Nav from "./components/Nav/Nav";
import Blogs from "./components/Blogs/Blogs";
import AboutUs from "./components/AboutUs/AboutUs";
import Team from "./components/Team/Team";
import MainPage from "./components/MainPage/MainPage";
import Bg from "./components/Bg/Bg";

function App() {
  const [showNav, setShowNav] = useState(false);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    console.log("Current position:", currentPosition); // Log current scroll position
    setShowNav(currentPosition > 50); // Adjust the value as needed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("Cleaning up event listener");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  console.log("showNav:", showNav); // Log showNav state

  return (
    <ChakraProvider>
      <Router>
        <div>
          <Nav showNav={showNav} />
          <Routes>
            <Route path="/" element={<Bg />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
