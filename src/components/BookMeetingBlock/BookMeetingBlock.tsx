import { Container, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import BlockSubtitle from "../BlockSubtitle/BlockSubtitle";
import BookMeetingBtn from "../BookMeetingBtn/BookMeetingBtn";
import BackgroundCircle from "../BackgroundCircle/BackgroundCircle";
// @ts-ignore
import Fade from "react-reveal/Fade";

const BookMeetingBlock: React.FC = () => {
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
      position="relative"
    >
      <BlockTitle mb={2}>Book A Meeting with Us</BlockTitle>
      <BlockSubtitle maxW="container.sm" mb={{ base: 4, md: 6 }}>
        You can choose a convenient time
      </BlockSubtitle>
      <Fade bottom>
        <Flex w="full" align="center" justify="center">
          <BookMeetingBtn
            px={{
              base: 8,
              md: 12,
            }}
          />
        </Flex>
      </Fade>
      <BackgroundCircle
        blur={120}
        left="25%"
        top="-10%"
        rotation={0}
        bg="brand.500"
        height={{
          base: "250px",
          md: "350px",
        }}
        width={{
          base: "150px",
          md: "650px",
        }}
      />
    </Container>
  );
};

export default BookMeetingBlock;
