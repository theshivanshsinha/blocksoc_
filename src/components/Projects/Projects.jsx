import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  Heading,
  Image,
  Center,
  Link,
} from "@chakra-ui/react";
import projectData from "./projectsData"; // Assuming you have project data in a separate file
import Nav2 from "../Nav2/Nav2";

const Project = ({ project }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Box
      bg="gray.800"
      borderRadius="xl"
      boxShadow="md"
      p={6}
      m={4}
      maxW="1200px"
      position="relative"
      _hover={{ transform: "scale(1.05)" }}
      onMouseEnter={toggleDescription}
      onMouseLeave={toggleDescription}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Image src={project.image} alt={project.name} borderRadius="xl" />
      <Box>
        <VStack align="start" spacing={2} mt={4}>
          <Text fontSize="lg" fontWeight="bold" color="blue.300">
            {project.name}
          </Text>
          <Text fontSize="sm" color="gray.500">
            Author: {project.author}
          </Text>
          {showDescription && (
            <Text fontSize="sm" color="gray.400">
              {project.description}
            </Text>
          )}
        </VStack>
        <Center mt={2}>
          <Link href={project.link} color="blue.400" fontSize="sm">
            Project Link
          </Link>
        </Center>
      </Box>
    </Box>
  );
};

const OurProjects = () => {
  return (
    <Box minHeight="100vh" bg="gray.900" color="white">
      <Nav2 />
      <Center>
        <Box
          p={10}
          mt={75}
          bg="gray.800"
          borderRadius="xl"
          boxShadow="md"
          width={{ base: "90%", md: "80%", lg: "60%" }}
        >
          <Center>
            <Heading as="h2" size="xl" textAlign="center" mb={10}>
              Our <span style={{ color: "#b300b3" }}>Projects</span>
            </Heading>
          </Center>
          <VStack spacing={8} align="stretch">
            {projectData.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default OurProjects;
