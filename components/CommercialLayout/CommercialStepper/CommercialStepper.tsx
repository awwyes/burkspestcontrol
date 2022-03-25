import { Box, Button, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import Contents from "../CommercialQuote/CommercialQuoteContents";

const steps = [
  { label: "How can we serve you?" },
  { label: "Name & Company" },
  { label: "Contact Information" },
  { label: "Done" },
];

export default function CommercialStepper() {
  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0,
  });
  return (
    <Box bg={useColorModeValue("white", "black")} p={12}>
      <Flex flexDir="column" width="100%">
        <Steps
          onClickStep={(step) => setStep(step)}
          activeStep={activeStep}
          mb={6}
        >
          {steps.map(({ label }, index) => (
            <Step fontFamily={"sans-serif"} label={label} key={label}>
                <Contents index={index} />
            </Step>
          ))}
        </Steps>
        {activeStep === steps.length ? (
          <Flex px={4} py={4} width="100%" flexDirection="column">
            <Heading fontSize="xl" textAlign="center">
              Woohoo! All steps completed!
            </Heading>
            <Button mx="auto" mt={6} size="sm" onClick={reset}>
              Reset
            </Button>
          </Flex>
        ) : (
          <Flex width="100%" justify="flex-end">
            <Button
              isDisabled={activeStep === 0}
              mr={4}
              onClick={prevStep}
              size="sm"
              color={useColorModeValue("yellow.500", "black")}
              variant={"solid"}
            >
              Prev
            </Button>
            <Button
              color={useColorModeValue("black", "black")}
              size="sm"
              onClick={nextStep}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
