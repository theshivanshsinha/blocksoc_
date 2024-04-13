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
import "./Vision.css";

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
          <VStack spacing={6} align="start" w="40vw" mt={5}>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              Our
              <span style={{ color: "#b300b3" }}> Vision</span>
            </Heading>
            <Divider my={8} borderColor="gray.600" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "70vw",
              }}
            >
              <iframe
                src="https://lottie.host/embed/ceea2e7f-6406-4cff-8dee-a67947e53bfc/NjhBWxglpJ.json"
                height={380}
                width={380}
              ></iframe>
              <Text
                fontSize={{ base: "md", md: "lg" }} // Decreased font size
                maxW="70ch"
                style={{
                  position: "relative",
                  top: "4vh",
                  fontSize: "1.5rem",
                  left: "15vw",
                  overflowY: "auto",
                  maxHeight: "40vh",
                }}
              >
                We aim to foster a lively community where members can learn,
                collaborate, and innovate. By spreading awareness and
                understanding of blockchain technology, we empower individuals
                to explore its potential and enact positive change across
                industries. Through educational resources, collaborative
                projects, and events, we inspire our members to harness
                blockchain's transformative power. Together, we cultivate an
                environment where curiosity thrives, ideas flow freely, and
                impactful solutions emerge.
              </Text>
            </div>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default AboutUs;
