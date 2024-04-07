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
import Nav from "../Nav/Nav";
import Nav2 from "../Nav2/Nav2";

const Contact = () => {
  return (
    <Box minHeight="100vh" bg="gray.900" color="white">
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
          <Center>
            <Image src={"./logo.png"} alt="Blocksoc Logo" boxSize="200px" />
          </Center>
          <Divider my={8} borderColor="gray.600" />
          <VStack spacing={8} align="start" w="100%">
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              Contact Us
            </Heading>
            <Text fontSize="lg" maxW="80ch">
              If you have any questions or feedback, we'd love to hear from you!
              Feel free to reach out to us through the following channels:
            </Text>
            <VStack spacing={4} align="start" w="100%">
              <ContactMethod
                icon="https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png"
                title="Email"
                link="mailto:blocksoc@example.com"
                detail="blocksoc@example.com"
              />
              <ContactMethod
                icon="https://vignette.wikia.nocookie.net/youtubepedia/images/5/55/Facebook.png/revision/latest?cb=20170327031942&path-prefix=es"
                title="Facebook"
                link="https://www.facebook.com/blocksoc"
                detail="Blocksoc Facebook Page"
              />
              <ContactMethod
                icon="https://pluspng.com/img-png/logo-instagram-png-open-2000.png"
                title="Instagram"
                link="https://www.instagram.com/blocksoc/"
                detail="@blocksoc"
              />
              <ContactMethod
                icon="https://static.vecteezy.com/system/resources/previews/017/339/624/original/linkedin-icon-free-png.png"
                title="LinkedIn"
                link="https://www.linkedin.com/company/blocksoc"
                detail="Blocksoc LinkedIn Page"
              />
              <ContactMethod
                icon="http://pluspng.com/img-png/phone-png-clipart-1667.png"
                title="President's Phone"
                detail="+91 0000000000"
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
      <Box display="flex" alignItems="center">
        <Image src={icon} alt={title} boxSize="50px" />
        <Text ml={2} fontSize="lg">
          <strong>{title}:</strong>{" "}
          {link ? (
            <Link href={link} color="teal.300">
              {detail}
            </Link>
          ) : (
            <Text color="gray.400">{detail}</Text>
          )}
        </Text>
      </Box>
    </VStack>
  );
};

export default Contact;
