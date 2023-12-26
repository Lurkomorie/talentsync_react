import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface CircleBackgroundProps extends BoxProps {
  rotation: number;
  blur?: number;
}

const BackgroundCircle: React.FC<CircleBackgroundProps> = ({
  rotation,
  blur,
  ...props
}) => {
  const circleStyle = {
    borderRadius: "50%",
    position: "absolute",
    zIndex: -1,
    transform: `rotate(${rotation}deg)`,
    filter: `blur(${blur}px)`,
    ...props,
  };

  return <Box sx={circleStyle} />;
};

export default BackgroundCircle;
