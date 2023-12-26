import { Box, Container, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BackgroundCircle from "../BackgroundCircle/BackgroundCircle";
// @ts-ignore
import Fade from "react-reveal/Fade";

const FirstGreetings: React.FC = () => {
  return (
    <Container
      maxW="container.xl"
      color="brand.400"
      h="80dvh"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
    >
      <Fade>
        <VStack
          maxW={{
            base: "100%",
            md: "50%",
          }}
          alignItems="flex-start"
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            textAlign="left"
          >
            Employ the best Software Developers from Eastern Europe and save up
            to 40% of your costs.
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="semibold"
            textAlign="left"
          >
            Directly. B2B. No Intermediares.
          </Text>
        </VStack>
      </Fade>
      <BackgroundCircle
        blur={180}
        right={-50}
        top="50%"
        rotation={0}
        bg="brand.500"
        height={{
          base: "250px",
          md: "450px",
        }}
        width={{
          base: "350px",
          md: "550px",
        }}
      />
      <BackgroundCircle
        blur={120}
        right="200px"
        top="10%"
        rotation={0}
        bg="brand.600"
        height={{
          base: "250px",
          md: "550px",
        }}
        width={{
          base: "150px",
          md: "350px",
        }}
      />
    </Container>
  );
};

export default FirstGreetings;
