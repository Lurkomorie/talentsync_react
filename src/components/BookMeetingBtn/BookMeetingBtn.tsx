import { Link, LinkProps } from "@chakra-ui/react";
import React from "react";

const BookMeetingBtn: React.FC<LinkProps> = ({ ...props }) => {
  return (
    <Link
      href="https://calendly.com/talentsync-meeting/30min"
      isExternal
      px={{
        base: 4,
        md: 6,
      }}
      fontWeight="bold"
      py={2}
      bg="brand.400"
      color="white"
      rounded="full"
      _hover={{
        bg: "brand.300",
        textDecoration: "none",
      }}
      {...props}
    >
      Book A Meeting
    </Link>
  );
};

export default BookMeetingBtn;
