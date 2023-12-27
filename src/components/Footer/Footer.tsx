import { Box, Container, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box
      bg="brand.200"
      pb={{
        base: 6,
      }}
      pt={{
        base: 6,
        md: 8,
      }}
      w="100%"
    >
      <Container
        maxW="container.lg"
        color="brand.400"
        display="flex"
        flexDirection={{
          base: "column",
          md: "row",
        }}
        justifyContent="space-between"
        alignItems="start"
      >
        <VStack spacing={2} align="stretch" pb={4}>
          <Text
            fontSize={{ base: "xl", md: "3xl" }}
            fontWeight="bold"
            color="brand.400"
            textAlign="left"
          >
            TalentSync
          </Text>
          <Text fontSize="md" color="brand.400" textAlign="left" maxW="500px">
            Specialized in comprehensive talent management solutions, offering
            expertise, innovation, and a personalized approach to meet the
            unique needs of each business.
          </Text>
        </VStack>
        <HStack spacing={4} justifyContent="start" alignItems="start">
          <VStack spacing={1} align="left" pr={4}>
            <Text fontSize="xl" fontWeight="semibold">
              Contacts
            </Text>
            <Text fontSize="md" color="brand.400">
              +373 68 300 700
            </Text>
            <Text fontSize="md" color="brand.400">
              info@talentsync.eu
            </Text>
          </VStack>
          <VStack spacing={1} align="left">
            <Text fontSize="xl" fontWeight="semibold">
              Follow Us
            </Text>
            <Icon as={FaLinkedinIn} fontSize="2em" color="white" />
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
