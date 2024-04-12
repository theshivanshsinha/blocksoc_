import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button, useMediaQuery } from "@chakra-ui/react";

function Nav() {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const newOpacity = Math.min(scrollTop / 500, 1);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      zIndex="999"
      boxShadow={`0 2px 4px rgba(0, 0, 0, ${scrollOpacity * 0.1})`}
      backdropFilter="blur(10px)"
      transition="box-shadow 0.3s"
    >
      <Box
        display="flex"
        position={"relative"}
        left={"50%"}
        px={4}
        py={2}
        justifyContent="space-between"
        alignItems="center"
        width="100vw"
      >
        <Box style={{ opacity: scrollOpacity }}>
          <Link to="/">
            <Button
              variant="ghost"
              color="white"
              _hover={{ bg: "transparent", color: "#4FD1C5" }}
            >
              Home
            </Button>
          </Link>
          {isLargerThanMD && (
            <>
              <Link to="/projects">
                <Button
                  variant="ghost"
                  color="white"
                  _hover={{ bg: "transparent", color: "#4FD1C5" }}
                >
                  Our Projects
                </Button>
              </Link>
              <Link to="/events">
                <Button
                  variant="ghost"
                  color="white"
                  _hover={{ bg: "transparent", color: "#4FD1C5" }}
                >
                  Our Events
                </Button>
              </Link>
              <Link to="/team">
                <Button
                  variant="ghost"
                  color="white"
                  _hover={{ bg: "transparent", color: "#4FD1C5" }}
                >
                  Our Team
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Nav;
