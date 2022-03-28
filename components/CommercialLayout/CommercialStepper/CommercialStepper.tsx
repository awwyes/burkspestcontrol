import { Button, Container, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { IoIosArrowForward } from "react-icons/io";
import Step1 from "../CommercialQuote/CommercialQuoteStep1";
import Step2 from "../CommercialQuote/CommercialQuoteStep2";
import Step3 from "../CommercialQuote/CommercialQuoteStep3";
import Step4 from "../CommercialQuote/CommercialQuoteStep4";

export default function CommercialStepper() {
    function getSteps() {
        return ["How can we serve you?", "Name & Company", "Contact Information", "Done"];
    }

    function getStepContent(activeStep) {
        switch (activeStep) {
            case 0:
                return <Step1 />;
            case 1:
                return <Step2 />;
            case 2:
                return <Step3 />;
            case 3:
                return <Step4 />;
        }
    }
  
    const steps = getSteps();
    const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
        initialStep: 0,
    });

  return (
    <Flex flexDir="column" width="100%" bgColor={useColorModeValue('white', "black")}>
        <Container maxW={'8xl'}>
        <Steps mt={10} onClickStep={(step) => setStep(step)} activeStep={activeStep} fontFamily={'sans-serif'}>
        {steps.map((label, _index) => (
          <Step label={label} key={label}>
                {getStepContent(activeStep)}
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex px={4} py={4} width="100%" flexDirection="column">
          <Heading fontSize="xl" textAlign="center">
            Woohoo! All steps completed!
          </Heading>
          <Button mx="auto" mt={6} size="sm" onClick={reset} 
            bgColor={useColorModeValue('yellow.500', 'yellow.500')} 
            color={useColorModeValue('black', 'black')} 
            _hover={{
              bgColor: useColorModeValue('black', 'black'),
              color: useColorModeValue('yellow.500', 'yellow.500')
          }}
          >
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
            bgColor={useColorModeValue('yellow.500', 'yellow.500')}
            color={useColorModeValue('black', 'black')}
            _hover={{
              bgColor: useColorModeValue('black', 'black'),
              color: useColorModeValue('yellow.500', 'yellow.500')
            }}
          >
            Prev
          </Button>
          <Button size="sm" onClick={nextStep} bgColor={useColorModeValue('yellow.500', 'yellow.500')} color={useColorModeValue('black', 'black')} _hover={{
              bgColor: useColorModeValue('black', 'black'),
              color: useColorModeValue('yellow.500', 'yellow.500')
          }}>
            {activeStep === steps.length - 1 ? "Submit Your Request" : "Continue"}
            <IoIosArrowForward />
          </Button>
        </Flex>
      )}
        </Container>
    </Flex>
  );
}
