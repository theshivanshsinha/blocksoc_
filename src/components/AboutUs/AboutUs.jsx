import React from "react";
import { Box, Text, VStack, Heading, Image, Center } from "@chakra-ui/react";
import "./About.css";

const AboutUs = () => {
  return (
    <Box minHeight="100vh" bg="gray.900" color="white">
      <Center>
        <Box
          p={10}
          mt={6}
          bg="gray.800"
          borderRadius="xl"
          boxShadow="md"
          height={"90vh"}
          width={"90vw"}
        >
          <Center>
            <Image src={"./logo.png"} alt="Blocksoc Logo" className="logo" />
          </Center>
          <VStack spacing={6} align="start" w="40vw" mt={8}>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              style={{ position: "relative", top: "-10vh" }}
            >
              <span style={{ color: "#b300b3" }} className="abt-text">
                About{" "}
              </span>
              Us
            </Heading>
            <Text
              maxW="80ch"
              style={{ position: "relative", top: "-10vh" }}
              className="txt"
            >
              We are the Blockchain Club of BPHC. Our enthusiasm for Blockchain
              Technology is matched only by our deep and unwavering dedication
              to exploring, learning about, and promoting blockchain among
              students. Through active involvement in discussions, projects, and
              initiatives within our club and the broader blockchain development
              community, we strive to foster understanding and innovation in
              this transformative field.
            </Text>
          </VStack>
          <Image
            src={require("./about.jpg")} // Adjust the path to your image
            style={{
              position: "relative",
              left: "65vw",
              transform: "translateX(-50%)",
              top: "-50vh",
            }}
            className="abt-img"
          />
        </Box>
      </Center>
    </Box>
  );
};

export default AboutUs;
