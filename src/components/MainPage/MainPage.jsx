import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Info from "../Info/Info";
import Works from "../Works/Works";
import Vision from "../Vision/Vision";

const MainPage = () => {
  return (
    <div>
      <LandingPage />
      <AboutUs />
      <Info />
      <Works />
      <Vision />
      <Contact />
    </div>
  );
};

export default MainPage;
