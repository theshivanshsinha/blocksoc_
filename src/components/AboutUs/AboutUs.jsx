import React from "react";
import { Box, Text, VStack, Heading, Image, Center } from "@chakra-ui/react";
import Nav2 from "../Nav2/Nav2";

const AboutUs = () => {
  return (
    <Box minHeight="120vh" bg="gray.900" color="white">
      <Center>
        <Box
          p={10}
          mt={6}
          bg="gray.800"
          borderRadius="xl"
          boxShadow="md"
          height={"100vh"}
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
              About Us
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }} // Decreased font size
              maxW="80ch"
              style={{ position: "relative", top: "-10vh", fontSize: "1.5rem" }}
            >
              Welcome to Blocksoc! We are a community of passionate individuals
              who are dedicated to fostering innovation and collaboration in the
              field of technology.
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }} // Decreased font size
              maxW="80ch"
              style={{ position: "relative", top: "-10vh", fontSize: "1.5rem" }}
            >
              Our mission is to provide a platform for students and
              professionals alike to come together, learn from each other, and
              create meaningful projects that make a positive impact on society.
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }} // Decreased font size
              maxW="80ch"
              style={{ position: "relative", top: "-10vh", fontSize: "1.5rem" }}
            >
              Whether you're a beginner looking to explore the world of
              technology or an experienced developer seeking new challenges,
              Blocksoc has something for everyone. Join us in our journey to
              build a better tomorrow through technology!
            </Text>
          </VStack>
          <Image
            src={require("./about.jpg")} // Adjust the path to your image
            height={"440px"}
            width={"700px"}
            style={{
              position: "relative",
              left: "62vw",
              transform: "translateX(-50%)",
              top: "-55vh",
            }} // Adjusted image position
          />
        </Box>
      </Center>
    </Box>
  );
};

export default AboutUs;
