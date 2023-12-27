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
          position="relative"
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
          <BackgroundCircle
            blur={180}
            bottom={0}
            top="-10%"
            left="-10%"
            right={0}
            rotation={0}
            opacity={0.7}
            bg="brand.600"
            height="140%"
            width="120%"
          />
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
    </Container>
  );
};

export default FirstGreetings;
