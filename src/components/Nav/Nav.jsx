import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Nav() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

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
      width="100%"
      zIndex="999"
      boxShadow={`0 2px 4px rgba(0, 0, 0, ${scrollOpacity * 0.1})`}
      backdropFilter="blur(10px)"
      transition="box-shadow 0.3s"
    >
      <Box
        display={{ base: "none", md: "flex" }}
        maxWidth="1200px"
        position={"relative"}
        left={"50%"}
        px={4}
        py={2}
        justifyContent="space-between"
        alignItems="center"
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
          <Link to="/blogs">
            <Button
              variant="ghost"
              color="white"
              _hover={{ bg: "transparent", color: "#4FD1C5" }}
            >
              Blogs
            </Button>
          </Link>
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
          <Link to="/events">
            <Button
              variant="ghost"
              color="white"
              _hover={{ bg: "transparent", color: "#4FD1C5" }}
            >
              Our Team
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        display={{ base: "block", md: "none" }}
        textAlign="center"
        px={4}
        py={2}
      >
        <Link to="/">
          <Button
            variant="ghost"
            color="white"
            _hover={{ bg: "transparent", color: "#4FD1C5" }}
          >
            Home
          </Button>
        </Link>
        <Link to="/events">
          <Button
            variant="ghost"
            color="white"
            _hover={{ bg: "transparent", color: "#4FD1C5" }}
          >
            Events
          </Button>
        </Link>
        <Link to="/contact">
          <Button
            variant="ghost"
            color="white"
            _hover={{ bg: "transparent", color: "#4FD1C5" }}
          >
            Contact
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Nav;
