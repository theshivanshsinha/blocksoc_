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

const Events = () => {
  const events = [
    {
      title: "Event 1",
      date: "2022-03-18T00:00:00Z",
      status: "Past Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "BITS Hyderabad",
      photos: ["photo1.jpg", "photo2.jpg"],
    },
    {
      title: "Event 2",
      date: "2022-06-15T00:00:00Z",
      status: "Past Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "BITS Hyderabad",
      photos: ["photo3.jpg", "photo4.jpg"],
    },
    {
      title: "Unfold 24'",
      date: "2024-05-18T00:00:00Z",
      status: "Upcoming Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "BITS Hyderabad",
      photos: ["photo1.jpg", "photo2.jpg"],
    },
    {
      title: "Unfold 25'",
      date: "2025-05-18T00:00:00Z",
      status: "Upcoming Event",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "BITS Hyderabad",
      photos: ["photo1.jpg", "photo2.jpg"],
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
      <Nav />
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
