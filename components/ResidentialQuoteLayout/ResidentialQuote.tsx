import {
  Box,
  ButtonGroup,
  Divider,
  Text,
  Heading,
  useColorModeValue,
  FormControl,
  Select,
  RadioGroup,
  Radio,
  HStack,
  Button,
  Input,
  FormLabel,
  VStack,
  Checkbox,
  CheckboxGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

export default function Quote() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    preferContact: "",
    serviceOptions: ["Pest Control"],
  });

  const handleChangeValue = (key) => (event) =>
    setFormValues({
      ...formValues,
      [key]: event.target.value,
    });

  const handleChangeCheckboxValue = (key) => (event) =>
    setFormValues({
      ...formValues,
      [key]: event.target.checked,
    });

  const handleClear = () =>
    setFormValues({
      firstName: "",
      lastName: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
      email: "",
      preferContact: "",
      serviceOptions: ["Pest Control"],
    });

  const onSubmit = (values) => {
    console.log(values);
    //Handle submit form data
    handleClear();
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    address: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    zipCode: Yup.number().required(),
    phone: Yup.string().required(),
    email: Yup.string()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      .required(),
    preferContact: Yup.string().required(),
    serviceOptions: Yup.array().required(),
  });

  return (
    <>
      <Box
        textAlign="center"
        py={10}
        px={6}
        bg={useColorModeValue("white", "black")}
      >
        <Heading as="h2" size="xl" mt={6} mb={2} fontFamily={"sans-serif"}>
          Get a free, no-obligation quote
        </Heading>
        <Text color={"gray.500"} px={6} size={"lg"}>
          Pest, Termite, and Mosquito control quotes are now available via
          email, text, or phone.
          <br />
          Quotes on other Burks Pest Control services require a free, on-site
          inspection to determine the proper treatment plan for your property.
        </Text>
      </Box>
      <Formik
        initialValues={formValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values, errors }) => (
          <Box
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={800}
            p={6}
            m="10px auto"
            as="form"
            onSubmit={handleSubmit as any}
            bg={useColorModeValue("white", "black")}
          >
            <Heading as={"h3"} fontFamily={"sans-serif"} fontSize={"xl"}>
              Name
            </Heading>
            <Divider />
            <FormControl isRequired py={3}>
                <HStack spacing={3}>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input name="firstName" label="First Name" w={60} />
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Input name="lastName" label="Last Name" w={60} />
                </HStack>
            </FormControl>

            <Heading as={"h3"} fontFamily={"sans-serif"} fontSize={"xl"} py={3}>
              Contact Information
            </Heading>
            <Divider />
            <FormControl isRequired py={3}>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input name="address" label="Address" mb={3} />
              <HStack spacing={2}>
                <FormLabel htmlFor="city">City</FormLabel>
                <Input name="city" label="City" w={60} />
                <FormLabel htmlFor="state">State</FormLabel>
                <Select name="state" label="State" w={20}>
                  <option value="AL">AL</option>
                  <option value="TN" defaultValue={"TN"}>
                    TN
                  </option>
                </Select>
                <FormLabel htmlFor="zipCode">Zip Code</FormLabel>
                <Input name="zipCode" label="Zip Code" w={'206px'} />
              </HStack>
                <FormLabel htmlFor="phone" py={3}>Phone</FormLabel>
                <Input name="phone" type="phone" w={80} />
                <FormLabel htmlFor="email" py={3}>Email</FormLabel>
                <Input name="email" type="email" w={80} />
                <FormLabel name="preferContact" py={3}>How would you prefer us to contact you?</FormLabel>
                <Select
                    name="preferContact"
                    selectprops={{
                        placeholder: "How would you prefer us to contact you?",
                    }}
                    w={80}
                >
              <option value="Phone" defaultValue={"Phone"}>Phone</option>
              <option value="Email">Email</option>
            </Select>
            </FormControl>
            <Heading as={"h3"} fontFamily={"sans-serif"} fontSize={"xl"} py={3}>
              Current Pest Issues
            </Heading>
            <Divider />
            <Text as={'p'} mb={3}>Burks Pest Control Options</Text>
            <CheckboxGroup>
              <SimpleGrid columns={2} spacing={3} mb={5}>
                <Checkbox name="serviceOptions" value="Pest Control">
                  Pest Control
                </Checkbox>
                <Checkbox name="serviceOptions" value="Mosquito Control">
                  Mosquito Control
                </Checkbox>
                <Checkbox name="serviceOptions" value="Other">
                  Other
                </Checkbox>
                <Checkbox name="serviceOptions" value="Termite Control">
                  Termite Control
                </Checkbox>
                <Checkbox name="serviceOptions" value="Bed Bug Removal">
                  Bed Bug Removal
                </Checkbox>
                <Checkbox name="serviceOptions" value="Not Sure">
                  Not Sure
                </Checkbox>
              </SimpleGrid>
            </CheckboxGroup>
            
            <ButtonGroup>
              <Button>Get My Quote</Button>
            </ButtonGroup>

            <Box as="pre" marginY={10}>
              {JSON.stringify(values, null, 2)}
              <br />
              {JSON.stringify(errors, null, 2)}
            </Box>
          </Box>
        )}
      </Formik>
    </>
  );
}
