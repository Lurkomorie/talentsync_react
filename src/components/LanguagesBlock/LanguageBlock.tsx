import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { techItems } from "./LanguageBlock.texts";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 3,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

const LanguageBlock: React.FC = () => {
  return (
    <Container
      maxW="container.xl"
      color="brand.400"
      mb={{
        base: 16,
        md: 32,
      }}
    >
      <Slider {...settings}>
        {techItems.map((item, index) => (
          <Flex
            key={index}
            display="flex !important"
            alignItems="center"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              h="85px"
              w="85px"
              borderRadius="full"
            >
              <Image src={item.icon} alt={item.title} />
            </Box>
            <Text fontWeight="bold" fontSize="lg" textAlign="center">
              {item.title}
            </Text>
          </Flex>
        ))}
      </Slider>
    </Container>
  );
};

export default LanguageBlock;
