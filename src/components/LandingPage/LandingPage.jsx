import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Nav from "../Nav/Nav";
import "./LandingPage.css"; // Import CSS file for additional styling
import { Link } from "react-router-dom";
import HALO from "vanta/dist/vanta.halo.min";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import TypeIt from "typeit-react";
import { TypeAnimation } from "react-type-animation";

const LandingPage = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: ref.current,
          THREE: THREE,
          xOffset: 0.2,
          amplitudeFactor: 3.0,
          size: 1.5,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={ref} className="main">
      <div>
        <TypeAnimation
          sequence={["Blocksoc", 1000]}
          wrapper="span"
          speed={10}
          repeat={1}
          className="blocksoc"
        />
        <br></br>
        <TypeAnimation
          sequence={[
            "Forging bonds among blockchain enthusiasts",
            1000,
            " ",
            1000,
            "Forging bonds among blockchain enthusiasts",
            1000,
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
          className="text"
        />
      </div>
      <button className="cta-button">Explore!</button>
    </div>
  );
};

export default LandingPage;
