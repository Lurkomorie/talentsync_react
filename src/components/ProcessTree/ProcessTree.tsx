import {
  Box,
  Container,
  VStack,
  Circle,
  Icon,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import { processItem } from "./ProcessTree.texts";
import { ProcessItemProps } from "./ProcessTree.types";
import BackgroundCircle from "../BackgroundCircle/BackgroundCircle";
// @ts-ignore
import Fade from "react-reveal/Fade";

const ProcessItem: React.FC<ProcessItemProps> = ({
  icon,
  title,
  description,
  isFirst,
  isLast,
}) => (
  <Flex align="stretch">
    <Flex
      direction="column"
      align="center"
      mr={8}
      position="relative"
      pt="16px"
    >
      <Circle
        size="92px"
        bg="transparent"
        border="2px solid"
        borderColor="brand.400"
        color="brand.400"
        fontSize="4em"
      >
        <Icon as={icon} />
      </Circle>
      {!isLast && (
        <Box
          position="absolute"
          width="2px"
          height="calc(100% - 92px + 40px)"
          bg="brand.400"
          top="108px"
        />
      )}
    </Flex>
    <VStack
      alignItems="start"
      justifyContent="center"
      pt={isFirst ? "2" : "0"}
      pb={isLast ? "2" : "0"}
    >
      <Text fontWeight="bold" fontSize="lg" textAlign="left">
        {title}
      </Text>
      <Text fontSize="md" textAlign="left">
        {description}
      </Text>
    </VStack>
  </Flex>
);

const ProcessTree: React.FC = () => {
  return (
    <Container
      maxW="container.xl"
      color="brand.400"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mb={{
        base: 12,
        md: 32,
      }}
      position="relative"
      id="process"
    >
      <BlockTitle>A Simple And Transparent Process</BlockTitle>
      <Fade bottom>
        <VStack align="stretch" maxW="container.md" spacing="40px">
          {processItem.map((item, index) => (
            <ProcessItem key={index} {...item} />
          ))}
        </VStack>
      </Fade>
      <BackgroundCircle
        blur={120}
        left="-10%"
        rotation={50}
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
      <BackgroundCircle
        blur={120}
        left="-10%"
        top="50%"
        rotation={-50}
        bg="brand.500"
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

export default ProcessTree;
