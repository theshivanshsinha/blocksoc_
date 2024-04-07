import React from "react";
import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import LandingPage from "../LandingPage/LandingPage";

const Home = () => {
  // Dummy data for demonstration
  const blogs = [
    {
      id: 1,
      image: "https://via.placeholder.com/400",
      author: "John Doe",
      date: "April 1, 2024",
      time: "10:00 AM",
      likes: 15,
      shares: 10,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero at euismod semper. Integer eu mi nec nisi varius iaculis sit amet vel quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero at euismod semper. Integer eu mi nec nisi varius iaculis sit amet vel quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero at euismod semper. Integer eu mi nec nisi varius iaculis sit amet vel quam.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400",
      author: "Jane Smith",
      date: "April 2, 2024",
      time: "11:30 AM",
      likes: 20,
      shares: 12,
      content:
        "Sed at velit in ipsum sollicitudin pharetra eu et nibh. Cras auctor, lectus a auctor fringilla, magna enim tristique odio, quis accumsan arcu enim id velit. Sed at velit in ipsum sollicitudin pharetra eu et nibh. Cras auctor, lectus a auctor fringilla, magna enim tristique odio, quis accumsan arcu enim id velit.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400",
      author: "Alice Johnson",
      date: "April 3, 2024",
      time: "1:45 PM",
      likes: 18,
      shares: 8,
      content:
        "Vestibulum ultrices libero vel libero euismod, nec venenatis lacus lacinia. Ut vestibulum aliquet arcu, nec consectetur mi. Fusce et sapien non lorem commodo convallis. Vestibulum ultrices libero vel libero euismod, nec venenatis lacus lacinia. Ut vestibulum aliquet arcu, nec consectetur mi. Fusce et sapien non lorem commodo convallis.",
    },
  ];

  return (
    <div>
      <VStack spacing={8} align="stretch" bg="rgba(26, 32, 44, 0.8)">
        {blogs.map((blog) => (
          <Box
            key={blog.id}
            bg="rgba(26, 32, 44, 0.8)"
            color="#ffffff"
            p={6}
            boxShadow="0 2px 4px rgba(0,0,0,0.1)"
            borderRadius="lg"
            mb={8}
            backdropFilter="blur(5px)"
          >
            <Image src={blog.image} alt="Blog Image" mb={6} borderRadius="lg" />

            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {blog.author}
            </Text>
            <Text fontSize="sm" color="gray.500" mb={2}>
              {blog.date} {blog.time}
            </Text>

            <Text fontSize="md" mb={4}>
              {blog.content}
            </Text>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <Button
                  variant="ghost"
                  color="white"
                  _hover={{ bg: "transparent", color: "#4FD1C5" }}
                  mr={4}
                >
                  {blog.likes} Likes
                </Button>
                <Button
                  variant="ghost"
                  color="white"
                  _hover={{ bg: "transparent", color: "#4FD1C5" }}
                >
                  {blog.shares} Shares
                </Button>
              </Box>
              <Box>
                <Button colorScheme="linkedin" _hover={{ bg: "#3245a8" }}>
                  Like
                </Button>
                <Button
                  colorScheme="facebook"
                  ml={4}
                  _hover={{ bg: "#3b5998" }}
                >
                  Share
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </VStack>
    </div>
  );
};

export default Home;
