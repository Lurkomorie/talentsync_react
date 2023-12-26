import { Text, TextProps } from "@chakra-ui/react";
import React from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";

const BlockTitle: React.FC<TextProps> = ({ children, ...rest }) => {
  return (
    <Fade bottom>
      <Text
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        fontWeight="bold"
        w="100%"
        textAlign="center"
        mt={{
          base: 8,
          md: 16,
        }}
        mb={{
          base: 8,
          md: 16,
        }}
        {...rest}
      >
        {children}
      </Text>
    </Fade>
  );
};

export default BlockTitle;
