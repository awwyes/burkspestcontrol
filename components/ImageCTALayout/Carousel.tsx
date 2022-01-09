import React, { useState } from 'react';
import { Box, Stack, HStack, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { useEffect } from 'react';
  
export default function Carousel() {
  const slides = [
    {
      img: "https://media.istockphoto.com/photos/bed-bug-waste1-picture-id139897782",
      alt: "This is a picture of a bed bug infestation",
      label: "Got a bed bug issue?",
      description: "This is a picture of a bed bug infestation"
    },
    {
      img: "https://media.istockphoto.com/photos/common-ant-on-the-kitchen-table-close-to-food-need-for-pest-control-picture-id1274283238",
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
  }, []);

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
                color={useColorModeValue("white", "yellow.500")}
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image src={slide.img} boxSize="full" backgroundSize="cover" />
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="full"
                mb="8"
                color={useColorModeValue("white", "yellow.500")}
              >
                <Text fontSize="2xl">{slide.label}</Text>
                <Text fontSize="lg">{slide.description}</Text>
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