import React, { useState, useEffect } from "react";
import {
  Divider,
  Box,
  Text,
  VStack,
  Heading,
  Center,
  Flex,
  Badge,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@chakra-ui/react";
import Nav from "../Nav/Nav";
import Nav2 from "../Nav2/Nav2";

import unfold23_1 from "./unfold23_1.jpg";
import unfold23_2 from "./unfold23_2.jpg";
import unfold23_3 from "./unfold23_3.jpg";
import unfold23_4 from "./unfold24_4.jpg";

import solidity22_1 from "./solidity22_1.jpg";
import solidity22_2 from "./solidity22_2.jpg";

import crypto1 from "./crypto22_1.jpg";
import crypto2 from "./crypto22_2.jpg";
import crypto3 from "./crypto22_3.jpg";

import blocksol_1 from "./blocksol23_1.jpg";

import nftopia_1 from "./nftopia_1.jpg";

const Events = () => {
  const events = [
    {
      title: "Unfold 23'",
      date: "2023-10-19T00:00:00Z",
      status: "Past Event",
      description:
        "Blocksoc was thrilled to be a part of the groundbreaking Unfold 23' hackathon in Bengaluru. As avid supporters of technological innovation, we joined forces with other industry leaders to witness the brightest minds in action. Together, we engaged in a three-day journey of coding, problem-solving, and networking, fostering a collaborative environment that sparks creativity and drives progress. Unfold 23' was more than just a hackathon; it was a testament to the power of community and the limitless possibilities of blockchain technology. We at Blocksoc are proud to have been a part of this transformative event, and we look forward to continuing our journey towards a decentralized future.",
      location: "KTPO,Bengaluu,India",
      photos: [unfold23_1, unfold23_2, unfold23_3, unfold23_4],
    },
    {
      title: "Solidity Bootcamp",
      date: "2022-11-17T00:00:00Z",
      status: "Past Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Atmos22' - BITS Hyderabad",
      photos: [solidity22_1, solidity22_2],
    },
    {
      title: "Fundamentals of Cryptocurrency",
      date: "2022-11-25T00:00:00Z",
      status: "Past Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Atmos22' - BITS Hyderabad",
      photos: [crypto3, crypto2, crypto1],
    },
    {
      title: "Blockchain & Solidity - workshop and contest",
      date: "2023-11-4T00:00:00Z",
      status: "Past Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "Atmos23'-BITS Hyderabad",
      photos: [blocksol_1],
    },
    {
      title: "NFTopia",
      date: "2024-04-14T00:00:00Z",
      status: "Upcoming Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "TechWeek-BITS Hyderabad",
      photos: [nftopia_1],
    },
  ];

  return (
    <Box minHeight="100vh" bg="gray.900" color="white">
      <img
        src="./logo.png"
        style={{
          width: "200px",
          height: "200px",
          position: "relative",
          top: "-5px",
          left: "170px",
        }}
        alt="Blocksoc Logo"
      />
      <Nav2 />
      <Center>
        <Box
          w="80%"
          p={8}
          mt={8}
          bg="gray.800"
          borderRadius="xl"
          boxShadow="md"
        >
          <Heading as="h1" fontSize="3xl" mb={8} textAlign="center">
            Events
          </Heading>
          <VStack spacing={8} align="stretch">
            {events.map((event, index) => (
              <Event
                key={index}
                event={event}
                isLast={index === events.length - 1}
              />
            ))}
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

const Event = ({ event, isLast }) => {
  const { title, date, status, description, location, photos } = event;
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const eventDate = new Date(date).getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining("Event ended");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <>
      <Box
        p={4}
        bg={status === "Past Event" ? "gray.700" : "gray.600"}
        borderRadius="md"
        cursor="pointer"
        onClick={toggleModal}
        _hover={{ bg: status === "Past Event" ? "gray.600" : "gray.500" }}
      >
        <Flex justify="space-between" align="center">
          <Box>
            <Text fontSize="xl" fontWeight="semibold">
              {title}
            </Text>
            <Text fontSize="sm" color="gray.400">
              {location}
            </Text>
            <Text fontSize="sm" color="gray.400">
              Date: {new Date(date).toLocaleDateString()}
            </Text>
          </Box>
          <Badge colorScheme={status === "Past Event" ? "red" : "green"}>
            {status}
          </Badge>
        </Flex>
        {status === "Upcoming Event" && <Text>{timeRemaining}</Text>}
      </Box>
      {!isLast && <Divider />}
      <EventModal
        isOpen={isOpen}
        onClose={toggleModal}
        event={event}
        timeRemaining={timeRemaining}
      />
    </>
  );
};

const EventModal = ({ isOpen, onClose, event, timeRemaining }) => {
  const { title, date, description, status, location, photos } = event;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent bg="gray.800" color="white">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <Text>Status: {status}</Text>
          <Text>Date: {new Date(date).toLocaleDateString()}</Text>
          <Text>Description: {description}</Text>
          <Text>Location: {location}</Text>
          {status === "Upcoming Event" && (
            <Text>Time remaining: {timeRemaining}</Text>
          )}
          {photos &&
            photos.map((photo, index) => (
              <Image key={index} src={photo} alt={`Photo ${index}`} />
            ))}
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Events;
