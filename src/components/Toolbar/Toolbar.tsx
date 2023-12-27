import {
  Box,
  Text,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import BookMeetingBtn from "../BookMeetingBtn/BookMeetingBtn";

import logo from "../../icons/logo.png";

const Toolbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLinkClick = (targetId: string) => () => {
    onClose();

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  const menuItems = (
    <>
      <Text
        fontWeight="bold"
        fontSize="md"
        cursor="pointer"
        _hover={{
          textDecoration: "none",
          color: "brand.300",
        }}
        onClick={handleLinkClick("process")}
      >
        Process
      </Text>
      <Text
        fontWeight="bold"
        fontSize="md"
        cursor="pointer"
        onClick={handleLinkClick("about")}
        _hover={{
          textDecoration: "none",
          color: "brand.300",
        }}
      >
        About Eastern Europe
      </Text>
      <Text
        fontWeight="bold"
        fontSize="md"
        cursor="pointer"
        _hover={{
          textDecoration: "none",
          color: "brand.300",
        }}
        onClick={handleLinkClick("whyus")}
      >
        Why Us?
      </Text>
      <BookMeetingBtn />
    </>
  );

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      maxW="container.xl"
      w="100%"
      py={{
        base: 4,
        md: 12,
      }}
      px={{
        base: 4,
        md: 6,
      }}
      color="brand.400"
    >
      <Image
        src={logo}
        alt="logo"
        width="100%"
        maxWidth="200px"
        height="100%"
        ml={{ base: 0, md: -6 }}
      />
      <Box display={{ base: "none", md: "block" }}>
        <HStack spacing={5}>{menuItems}</HStack>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Open drawer"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="ghost"
          sx={{
            svg: {
              fontSize: "1.5em",
            },
          }}
        />
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay>
            <DrawerContent color="brand.400">
              <DrawerCloseButton mt={2} />
              <DrawerHeader>
                <Text
                  fontSize={{ base: "xl", md: "3xl" }}
                  fontWeight="bold"
                  color="brand.400"
                  pl={{
                    base: 2,
                    md: 0,
                  }}
                >
                  TalentSync
                </Text>
              </DrawerHeader>
              <DrawerBody py={8}>
                <VStack spacing={5}>{menuItems}</VStack>
              </DrawerBody>
              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Toolbar;
