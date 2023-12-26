import { Text, TextProps } from "@chakra-ui/react";
import React from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";

const BlockSubtitle: React.FC<TextProps> = ({ children, ...rest }) => {
  return (
    <Fade bottom>
      <Text
        fontSize={{
          base: "lg",
          md: "xl",
        }}
        w="100%"
        textAlign="center"
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

export default BlockSubtitle;
