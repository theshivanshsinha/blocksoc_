import React from "react";
import { Box, Text, VStack, Heading, Image, Center } from "@chakra-ui/react";
import Nav2 from "../Nav2/Nav2";

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
            <Image
              src={"./logo.png"}
              alt="Blocksoc Logo"
              boxSize={{ base: "150px", md: "200px" }}
              style={{ width: "20vw", height: "40vh" }}
            />
          </Center>
          <VStack spacing={6} align="start" w="40vw" mt={8}>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              style={{ position: "relative", top: "-10vh" }}
            >
              <span style={{ color: "#b300b3" }}>About </span>Us
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }} // Decreased font size
              maxW="80ch"
              style={{ position: "relative", top: "-10vh", fontSize: "1.5rem" }}
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
            height={"440px"}
            width={"700px"}
            style={{
              position: "relative",
              left: "65vw",
              transform: "translateX(-50%)",
              top: "-43vh",
            }} // Adjusted image position
          />
        </Box>
      </Center>
    </Box>
  );
};

export default AboutUs;
