import { Step, Steps, useSteps } from 'chakra-ui-steps';

const steps = [{ label: "How can we serve you?" }, { label: "Name & Company" }, { label: "Contact Information" }, { label: "Done" } ]

export const ClickableSteps = () => {
  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initalStep: 0,
  })
}

export default function CommericalStepper() {
    return (
        <div>Something goes here</div>
    )
}