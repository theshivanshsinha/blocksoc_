import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Nav2() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="999"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      backdropFilter="blur(10px)" // Adds a blurry effect to the background
      transition="box-shadow 0.3s"
    >
      <Box
        display={{ base: "none", md: "flex" }}
        maxWidth="1200px"
        position={"relative"}
        left={"25vw"}
        px={4}
        py={2}
        justifyContent="center"
        alignItems="center"
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
  );
}

export default Nav2;
