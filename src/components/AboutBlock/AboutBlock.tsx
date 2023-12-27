import { Container, Flex, Icon, VStack, Text, Box } from "@chakra-ui/react";
import React from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import { AboutItemProps } from "./AboutBlock.types";
import { aboutItems } from "./AboutBlock.texts";
import BackgroundCircle from "../BackgroundCircle/BackgroundCircle";
// @ts-ignore
import Fade from "react-reveal/Fade";

const AboutBlock: React.FC = () => {
  return (
    <Container
      maxW="container.md"
      color="brand.400"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mb={{
        base: 16,
        md: 32,
      }}
      position="relative"
      id="about"
    >
      <BlockTitle>About Eastern Europe</BlockTitle>
      <Fade bottom>
        <VStack
          spacing={{
            base: 3,
            md: 6,
          }}
          w="full"
        >
          {aboutItems.map((item, index) => (
            <AboutItem key={index} {...item} />
          ))}
        </VStack>
      </Fade>
      <BackgroundCircle
        blur={140}
        top={0}
        right="0"
        rotation={0}
        bg="brand.600"
        height="70%"
        width="60%"
      />
      <BackgroundCircle
        blur={220}
        top={0}
        left="0"
        rotation={0}
        bg="brand.500"
        height="70%"
        width="60%"
      />
      <BackgroundCircle
        blur={140}
        bottom="30%"
        right={0}
        left={0}
        rotation={0}
        bg="brand.600"
        height="50%"
        width="120%"
      />
      <BackgroundCircle
        blur={220}
        bottom={0}
        right={0}
        left={0}
        rotation={0}
        bg="brand.500"
        height="50%"
        width="120%"
      />
    </Container>
  );
};

const AboutItem: React.FC<AboutItemProps> = ({ icon, title, description }) => {
  return (
    <Flex
      alignItems="center"
      //   flexDirection={{
      //     base: "column",
      //     md: "row",
      //   }}
      justifyContent="flex-start"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="85px"
        w="85px"
        pr={{
          base: 4,
          md: 10,
        }}
      >
        <Icon as={icon} fontSize="4em" color="brand.400" />
      </Box>
      <VStack alignItems="start" justifyContent="center">
        <Text fontWeight="bold" w="full" fontSize="lg" textAlign="left">
          {title}
        </Text>
        <Text fontSize="md" textAlign="left">
          {description}
        </Text>
      </VStack>
    </Flex>
  );
};

export default AboutBlock;
