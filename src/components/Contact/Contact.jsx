import React from "react";
import {
  Box,
  Link,
  Text,
  VStack,
  Heading,
  Image,
  Center,
  Divider,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box minHeight="100vh" bg="gray.900" color="white">
      <Center>
        <Box
          w="80%"
          p={8}
          mt={8}
          bg="gray.800"
          borderRadius="xl"
          boxShadow="md"
        >
          <VStack spacing={8} align="start" w="100%">
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              <span style={{ color: "#b300b3" }}>Contact </span>Us
            </Heading>
            <Divider my={8} borderColor="gray.600" />
            <Text fontSize="lg" maxW="80ch">
              If you have any questions or feedback, we'd love to hear from you!
              Feel free to reach out to us through the following channels:
            </Text>
            <VStack spacing={4} align="start" w="100%">
              <ContactMethod
                icon="https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png"
                title="Email"
                link="mailto:blocksoc.bphc@gmail.com"
                detail="blocksoc.bphc@gmail.com"
              />
              <ContactMethod
                icon="https://vignette.wikia.nocookie.net/youtubepedia/images/5/55/Facebook.png/revision/latest?cb=20170327031942&path-prefix=es"
                title="Facebook"
                link="https://www.facebook.com/groups/blocksoc/?ref=share&mibextid=NSMWBT"
                detail="https://www.facebook.com/groups/blocksoc/?ref=share&mibextid=NSMWBT"
              />
              <ContactMethod
                icon="https://pluspng.com/img-png/logo-instagram-png-open-2000.png"
                title="Instagram"
                link="https://www.instagram.com/blocksoc.bphc?igsh=MXFjaDRma3F2bHk2bw=="
                detail="https://www.instagram.com/blocksoc.bphc?igsh=MXFjaDRma3F2bHk2bw=="
              />
              <ContactMethod
                icon="https://static.vecteezy.com/system/resources/previews/017/339/624/original/linkedin-icon-free-png.png"
                title="LinkedIn"
                link="https://www.linkedin.com/company/blocksoc-hyderabad/"
                detail="https://www.linkedin.com/company/blocksoc-hyderabad/"
              />
            </VStack>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

const ContactMethod = ({ icon, title, link, detail }) => {
  return (
    <VStack align="start" spacing={2} w="100%">
      <Box
        display="flex"
        alignItems="center"
        position="relative"
        _hover={{
          ".overlay": {
            opacity: 1,
          },
        }}
      >
        <Image src={icon} alt={title} boxSize="50px" />
        <Text ml={2} fontSize="lg">
          <strong style={{ color: "#1aa3ff" }}>{title}:</strong>{" "}
          {link ? (
            <Link href={link} color="teal.300"></Link>
          ) : (
            <Text color="gray.400">{detail}</Text>
          )}
        </Text>
        {link && (
          <Box
            position="absolute"
            top="50%"
            left="20vw"
            transform="translate(-50%, -50%)"
            bg="blackAlpha.800"
            color="white"
            p={2}
            borderRadius="md"
            className="overlay"
            opacity={0}
            transition="opacity 0.3s"
          >
            <Link
              href={link}
              color="white"
              textDecoration="underline"
              position="relative"
              left="0vw"
            >
              {detail}
            </Link>
          </Box>
        )}
      </Box>
    </VStack>
  );
};

export default Contact;
