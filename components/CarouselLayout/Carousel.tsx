import { useState } from 'react';
import { Box, Stack, HStack, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { useEffect } from 'react';
  
export default function Carousel() {
  const slides = [
    {
      img: "/termites.jpg",
      alt: "This is a picture of termites",
      label: "Got a termite issue?",
      description: "This is a picture of a termite infestation"
    },
    {
      img: "/ants.jpg",
      alt: "This is a picture of ants feeding",
      label: "Got Ants?",
      description: "This is a picture of ants feeding"
    },
    {
      img: "https://images.unsplash.com/photo-1622601038146-4b341e5f1146?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3636&q=80",
      alt: "This is a picture of lady bugs",
      label: "Asian Beetles",
      description: "This is a picture of lady bugs"
    },
    {
      img: "https://images.unsplash.com/photo-1567044060510-7c84e39f995e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80",
      alt: "This is a picture of honey bees",
      label: "Bee infestation",
      description: "This is a picture of honey bees"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  }

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all 0.5s ease",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 5000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  });

  const blackAndWhite = useColorModeValue('black', 'white');
  const whiteAndBlack = useColorModeValue('white', 'black');

  return (
    <Flex
      w="full"
      bg={useColorModeValue('white', 'black')}
      p={0}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="100%" w="100%" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image src={slide.img} boxSize="full" alt={slide.alt} backgroundSize="cover" />
              <Stack
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="100%"
                mb="3"
              >
                <Box backgroundColor={blackAndWhite} color={whiteAndBlack} p={'3px'}>
                <Text fontSize="2xl">{slide.label}</Text>
                <Text fontSize="lg">{slide.description}</Text>
                </Box>
              </Stack>
            </Box>
          ))}
        </Flex>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", , "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};