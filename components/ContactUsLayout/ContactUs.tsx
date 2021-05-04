import { Box, ButtonGroup, Radio, Heading, Spacer } from '@chakra-ui/react'
import { Formik } from 'formik'
import { InputControl, ResetButton, SubmitButton, TextareaControl } from 'formik-chakra-ui'
import * as React from 'react'
import * as Yup from 'yup'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = (values) => {
    sleep(300).then(() => {
        window.alert(JSON.stringify(values, null, 2));
    });
};

const initialValues = {
    fullName: "",
    email: "",
    notes: ""
};

const validationSchema = Yup.object({
    fullName: Yup.string().required(),
    email: Yup.string().required(),
    notes: Yup.string().required(),
});

const ContactUs = () => {
    return (
        <>
            <Heading
                as="h1"
                textAlign="center"
            >
                Looking for a well paying opportunity?
            </Heading>
            <Formik
                initialValues={initialValues}
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
                    >
                        <InputControl name="fullName" typeof="text" label="Full Name" />
                        <InputControl name="email" typeof="email" label="Email Address" />
                        <TextareaControl name="notes" label="Notes" />
                        <br />
                        <ButtonGroup>
                            <SubmitButton>Submit</SubmitButton>
                            <ResetButton>Reset</ResetButton>
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
};

export default ContactUs;