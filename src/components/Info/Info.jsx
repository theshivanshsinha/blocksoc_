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

const Info = () => {
  return (
    <Box minHeight="100vh" bg="gray.900" color="white">
      <Center>
        <Box
          p={10}
          mt={6}
          bg="gray.800"
          borderRadius="xl"
          boxShadow="md"
          height={"85vh"}
          width={"90vw"}
          position="relative"
        >
          <VStack spacing={6} align="start" w="40vw" mt={8}>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              What is
              <span style={{ color: "#b300b3" }}> Blockchain Technology</span>?
            </Heading>
            <Divider my={8} borderColor="gray.600" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100vw",
              }}
            >
              <iframe
                src="https://lottie.host/embed/43002973-216e-40c4-b901-d2339424b78b/qYOIH8vDjX.json"
                width={380}
                height={380}
              ></iframe>
              <Text
                fontSize={{ base: "md", md: "lg" }} // Decreased font size
                maxW="70ch"
                style={{
                  position: "relative",
                  top: "6vh",
                  fontSize: "1.5rem",
                  left: "15vw",
                }}
              >
                Blockchain technology functions as a decentralized ledger
                system, securely recording transactions across a network of
                computers. Its decentralized structure and consensus mechanisms
                ensure transparency, immutability, and trust in transactional
                data. Smart contracts automate agreements, reducing the need for
                intermediaries and minimizing the risk of errors or disputes.
                The technology finds applications across diverse sectors,
                including finance, supply chain management, healthcare, and
                more. In finance, it streamlines processes like cross-border
                payments and trade settlements. In supply chain management, it
                enhances transparency and traceability, ensuring the
                authenticity of products and preventing fraud. Blockchain's
                transformative potential extends to healthcare, real estate,
                voting systems, and numerous other industries, promising to
                revolutionize transaction processes and data management
                practices.
              </Text>
            </div>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Info;
