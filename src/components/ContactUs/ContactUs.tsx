import {
  Container,
  Flex,
  Link,
  SimpleGrid,
  VStack,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import BlockSubtitle from "../BlockSubtitle/BlockSubtitle";
// @ts-ignore
import Fade from "react-reveal/Fade";

const ContactUs: React.FC = () => {
  return (
    <Container
      maxW="container.lg"
      color="brand.400"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mb={{
        base: 16,
        md: 32,
      }}
    >
      <BlockTitle mb={2}>Or Let Us Contact You</BlockTitle>
      <BlockSubtitle maxW="container.sm" mb={{ base: 4, md: 6 }}>
        Feel free to leave your contact information and we will get back to you
      </BlockSubtitle>
      <Fade bottom>
        <VStack h="100%" w="md">
          <Input
            placeholder="Name"
            borderRadius="full"
            borderColor="brand.400"
          />
          <Input
            placeholder="Email"
            borderRadius="full"
            borderColor="brand.400"
          />
          <Input
            placeholder="Company Name"
            borderRadius="full"
            borderColor="brand.400"
          />
          <Textarea
            placeholder="Your Comment"
            borderRadius="24px"
            borderColor="brand.400"
            rows={6}
          />
          <Button
            px={{
              base: 4,
              md: 6,
            }}
            fontWeight="bold"
            py={2}
            bg="brand.400"
            color="white"
            rounded="full"
            w="full"
            _hover={{
              bg: "brand.300",
              textDecoration: "none",
            }}
          >
            Send
          </Button>
        </VStack>
      </Fade>
    </Container>
  );
};

export default ContactUs;
