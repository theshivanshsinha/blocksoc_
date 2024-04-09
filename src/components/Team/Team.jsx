import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Nav2 from "../Nav2/Nav2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import members data
import members from "./member";

const Team = () => {
  return (
    <Box
      bg="gray.900"
      color="white"
      style={{ position: "relative", top: "0vh" }}
    >
      <Heading
        as="h2"
        size="xl"
        textAlign="center"
        position="relative"
        top="4.9vh"
        left="-45vw"
      >
        Our <span style={{ color: "#b300b3" }}>Team</span>
      </Heading>
      <VStack spacing={8}>
        <TeamSection title="Dev Team" position="Developer" members={members} />
        <TeamSection
          title="Research and Content Team"
          position="Research and Content"
          members={members}
        />
        <TeamSection
          title="Logistics Team"
          position="Logistics"
          members={members}
        />
        {/* Add more departments here */}
      </VStack>
    </Box>
  );
};

const TeamSection = ({ title, position, members }) => {
  const filteredMembers = members.filter(
    (member) => member.position === position
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box width="100%">
        <Heading
          as="h3"
          size="lg"
          mb={4}
          textAlign="center"
          style={{ color: "#1aa3ff", padding: "2rem" }}
        >
          {title}
        </Heading>
        {filteredMembers.length > 0 && (
          <Slider {...settings}>
            {filteredMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </Slider>
        )}
        <br />
        <br />
      </Box>
    </>
  );
};

const TeamCard = ({ member }) => {
  const { name, id, team, photo, linkedIn } = member;

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      bg="gray.800"
      color="white"
      boxShadow="md"
      _hover={{ boxShadow: "xl" }}
    >
      <Image src={photo} alt={name} borderRadius="full" boxSize="150px" />
      <Text mt={4} fontSize="xl" fontWeight="semibold" textAlign="center">
        {name}
      </Text>
      <Text fontSize="md" color="gray.300" textAlign="center" mb={2}>
        ID: {id}
      </Text>
      <Text fontSize="md" color="gray.300" textAlign="center" mb={2}>
        Team: {team}
      </Text>
      <Text fontSize="md" color="gray.300" textAlign="center" mb={2}>
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          LinkedIn Profile
        </a>
      </Text>
    </Box>
  );
};

export default Team;
