import { Box, Container, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BackgroundCircle from "../BackgroundCircle/BackgroundCircle";
// @ts-ignore
import Fade from "react-reveal/Fade";
import mainImage from "../../icons/mainpage.jpg";

const FirstGreetings: React.FC = () => {
  return (
    <Container
      maxW="container.xl"
      color="brand.400"
      h="65dvh"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
    >
      <Fade>
        <VStack
          w={{
            base: "100%",
            md: "90%",
          }}
          alignItems="flex-start"
        >
          <Text
            w="full"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            textAlign="left"
          >
            Employ the best Software Developers from Eastern Europe and save up
            to 40% of your costs.
          </Text>
          <Text
            w="full"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="semibold"
            textAlign="left"
          >
            Directly. B2B. No Intermediares.
          </Text>
        </VStack>
      </Fade>
      <Fade>
        <Image
          src={mainImage}
          alt="mainpage"
          width="100%"
          height="100%"
          borderRadius="3xl"
          display={{ base: "none", md: "block" }}
        />
      </Fade>
      <BackgroundCircle
        blur={180}
        left={-50}
        top="50%"
        rotation={0}
        bg="brand.600"
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
        left="200px"
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
