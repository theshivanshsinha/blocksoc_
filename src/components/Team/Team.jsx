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

const Team = () => {
  const members = [
    {
      name: "John Doe",
      branch: "Computer Science",
      email: "john@example.com",
      github: "johndoe",
      year: "Senior",
      hobbies: "Reading, coding",
      skills: "JavaScript, React, Node.js",
      position: "Developer",
      image: "john.jpg",
    },
    {
      name: "John Moe",
      branch: "Computer Science",
      email: "john@example.com",
      github: "johndoe",
      year: "Senior",
      hobbies: "Reading, coding",
      skills: "JavaScript, React, Node.js",
      position: "Developer",
      image: "john.jpg",
    },
    {
      name: "John Koe",
      branch: "Computer Science",
      email: "john@example.com",
      github: "johndoe",
      year: "Senior",
      hobbies: "Reading, coding",
      skills: "JavaScript, React, Node.js",
      position: "Developer",
      image: "john.jpg",
    },
    {
      name: "John Roe",
      branch: "Computer Science",
      email: "john@example.com",
      github: "johndoe",
      year: "Senior",
      hobbies: "Reading, coding",
      skills: "JavaScript, React, Node.js",
      position: "Developer",
      image: "john.jpg",
    },
    {
      name: "Jane Smith",
      branch: "Electrical Engineering",
      email: "jane@example.com",
      github: "janesmith",
      year: "Junior",
      hobbies: "Painting, swimming",
      skills: "Python, Django, SQL",
      position: "Developer",
      image: "jane.jpg",
    },
    {
      name: "Mike Johnson",
      branch: "Business Administration",
      email: "mike@example.com",
      github: "mikejohnson",
      year: "Senior",
      hobbies: "Playing guitar, hiking",
      skills: "Marketing, Sales, Management",
      position: "Logistics",
      image: "mike.jpg",
    },
    {
      name: "Emily Johnson",
      branch: "Mathematics",
      email: "emily@example.com",
      github: "emilyjohnson",
      year: "Junior",
      hobbies: "Drawing, traveling",
      skills: "Data Analysis, Statistics",
      position: "Research and Content",
      image: "emily.jpg",
    },
    {
      name: "Michael Smith",
      branch: "Physics",
      email: "michael@example.com",
      github: "michaelsmith",
      year: "Senior",
      hobbies: "Playing piano, photography",
      skills: "Quantum Mechanics, Astrophysics",
      position: "Research and Content",
      image: "michael.jpg",
    },
    {
      name: "Sara Lee",
      branch: "Chemistry",
      email: "sara@example.com",
      github: "saralee",
      year: "Junior",
      hobbies: "Cooking, hiking",
      skills: "Organic Chemistry, Biochemistry",
      position: "Logistics",
      image: "sara.jpg",
    },
    {
      name: "David Wilson",
      branch: "Environmental Science",
      email: "david@example.com",
      github: "davidwilson",
      year: "Senior",
      hobbies: "Gardening, bird watching",
      skills: "Sustainability, Climate Change",
      position: "Logistics",
      image: "david.jpg",
    },
    {
      name: "David Wilwa",
      branch: "Environmental Science",
      email: "david@example.com",
      github: "davidwilson",
      year: "Senior",
      hobbies: "Gardening, bird watching",
      skills: "Sustainability, Climate Change",
      position: "Logistics",
      image: "david.jpg",
    },
    {
      name: "David Wilsun",
      branch: "Environmental Science",
      email: "david@example.com",
      github: "davidwilson",
      year: "Senior",
      hobbies: "Gardening, bird watching",
      skills: "Sustainability, Climate Change",
      position: "Logistics",
      image: "david.jpg",
    },
    {
      name: "David Baeckon",
      branch: "Environmental Science",
      email: "david@example.com",
      github: "davidwilson",
      year: "Senior",
      hobbies: "Gardening, bird watching",
      skills: "Sustainability, Climate Change",
      position: "Logistics",
      image: "david.jpg",
    },
    {
      name: "David Pagl",
      branch: "Environmental Science",
      email: "david@example.com",
      github: "davidwilson",
      year: "Senior",
      hobbies: "Gardening, bird watching",
      skills: "Sustainability, Climate Change",
      position: "Logistics",
      image: "david.jpg",
    },
    {
      name: "Jessica Brown",
      branch: "Sociology",
      email: "jessica@example.com",
      github: "jessicabrown",
      year: "Junior",
      hobbies: "Writing, yoga",
      skills: "Social Research, Data Collection",
      position: "Research and Content",
      image: "jessica.jpg",
    },
    // Your member data
  ];

  return (
    <Box
      bg="gray.900"
      color="white"
      style={{ position: "relative", top: "0vh" }}
    >
      <Heading as="h2" size="xl" textAlign="center" mb={10}>
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
              <TeamCard key={member.name} member={member} />
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
  const {
    name,
    branch,
    email,
    github,
    year,
    hobbies,
    skills,
    position,
    image,
  } = member;

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
      <Image src={image} alt={name} borderRadius="full" boxSize="150px" />
      <Text mt={4} fontSize="xl" fontWeight="semibold" textAlign="center">
        {name}
      </Text>
      <Text fontSize="md" color="gray.300" textAlign="center" mb={2}>
        {branch}
      </Text>
      <Text fontSize="md" color="gray.300" textAlign="center" mb={2}>
        {year} - {position}
      </Text>
      <Text fontSize="md" color="gray.300" textAlign="center" mb={2}>
        {email}
      </Text>
      <Text fontSize="md" color="gray.300" textAlign="center" mb={2}>
        {github}
      </Text>
      <Text fontSize="md" color="gray.300" textAlign="center" mb={2}>
        <strong>Hobbies:</strong> {hobbies}
      </Text>
      <Text fontSize="md" color="gray.300" textAlign="center" mb={2}>
        <strong>Skills:</strong> {skills}
      </Text>
    </Box>
  );
};

export default Team;
