import { Box, VStack, Flex, Divider, chakra, Grid, GridItem, Container, Icon, useColorModeValue } from "@chakra-ui/react";
import { ReactElement } from "react";
import { FaWarehouse } from "react-icons/fa";
import { GiHospital } from "react-icons/gi";
import { MdFoodBank, MdStoreMallDirectory } from "react-icons/md";
import { RiCommunityLine, RiHotelLine } from 'react-icons/ri';

interface FeatureProps {
  heading: string;
  icon: ReactElement;
}

const Feature = ({ heading, icon }: FeatureProps) => {
  return (
    <GridItem bgColor={useColorModeValue("white", "black")}>
      <Flex
        w={128}
        h={128}
        align={"center"}
        justify={"center"}
        color={useColorModeValue("black", 'white')}
        rounded={"full"}
        borderColor={useColorModeValue("yellow.500", "yellow.500")}
        borderWidth={"medium"}
        bg={useColorModeValue("white", "black")}
      >
        {icon}
      </Flex>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
    </GridItem>
  );
};

export default function IndustryExpertise() {
  return (
    <Box
      as={Container}
      maxW="100%"
      p={4}
      pt={12}
      bgColor={useColorModeValue("white", "black")}
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(1, 1fr)"
        }}
        gap={4}
        mb={12}
      >
        <GridItem textAlign={"center"}>
          <Box>
            <VStack>
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Burks Pest Control Industry Expertise
              </chakra.h2>
              <chakra.p>
                From convenience stores and restaurants to hospitals,
                food-processing plants, and stadiums, no two commercial or
                industrial facilities are alike. And no two pest challenges are
                alike. Through the years, our entomologists and pest control
                technicians have developed proven methods to address pest issues
                in a wide variety of commercial and industrial facilities.
              </chakra.p>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"Medical"}
          icon={<Icon as={GiHospital} w={"62px"} h={"62px"} />}
        />
        <Feature
          heading={"Retail"}
          icon={<Icon as={MdStoreMallDirectory} w={"62px"} h={"62px"} />}
        />
        <Feature
          heading={"Food"}
          icon={<Icon as={MdFoodBank} w={"62px"} h={"62px"} />}
        />
        <Feature
          heading={"Hospitality"}
          icon={<Icon as={RiHotelLine} w={"62px"} h={"62px"} />}
        />
        <Feature
          heading={"Warehouse"}
          icon={<Icon as={FaWarehouse} w={"62px"} h={"62px"} />}
        />
        <Feature
          heading={"Community"}
          icon={<Icon as={RiCommunityLine} w={"62px"} h={"62px"} />}
        />
      </Grid>
    </Box>
  );
}
