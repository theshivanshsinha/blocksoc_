import React from "react";
import {
  Box,
  Text,
  VStack,
  Heading,
  Image,
  Center,
  Divider,
} from "@chakra-ui/react";
import "./Work.css";

const AboutUs = () => {
  return (
    <Box minHeight="80vh" bg="gray.900" color="white" className="box">
      <Center>
        <Box
          p={10}
          mt={6}
          bg="gray.800"
          borderRadius="xl"
          boxShadow="md"
          height={"70vh"}
          width={"90vw"}
        >
          <VStack spacing={6} align="start" w="40vw" mt={8}>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              What do
              <span style={{ color: "#b300b3" }}> we do?</span>
            </Heading>
            <Divider my={8} borderColor="gray.600" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "70vw",
              }}
            >
              <Text
                fontSize={{ base: "md", md: "lg" }} // Decreased font size
                maxW="70ch"
                style={{
                  position: "relative",
                  top: "4vh",
                  fontSize: "1.5rem",
                  left: "0vw",
                  overflowY: "auto",
                  maxHeight: "40vh",
                }}
              >
                The Blockchain Club is involved in a spectrum of activities
                aimed at fostering understanding, education, and innovation
                within the blockchain ecosystem. Our initiatives include
                deploying smart contracts, conducting workshops, and researching
                Web3 technologies. We author articles that provide insights into
                blockchain advancements. Engaging in hackathons enables us to
                showcase our skills and collaborate with like-minded enthusiasts
                to solve real-world problems. Furthermore, our dedication to
                project development drives us to create innovative solutions
                that contribute meaningfully to the blockchain space.
              </Text>
              <iframe
                src="https://lottie.host/embed/26de9ef7-9b5e-45c7-a6b1-7f76f964f355/C9D2kRqkHM.json"
                width={380}
                height={380}
                position="relative"
                left="50vw"
              ></iframe>
            </div>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default AboutUs;
