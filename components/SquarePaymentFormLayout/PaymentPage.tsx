import React, { useState } from 'react'
import { Flex, Heading, Stack, Image } from '@chakra-ui/react'
import { 
    SquarePaymentForm,
    CreditCardNumberInput,
    CreditCardExpirationDateInput,
    CreditCardPostalCodeInput,
    CreditCardCVVInput,
    CreditCardSubmitButton
} from 'react-square-payment-form'
import 'react-square-payment-form/lib/default.css'

class PaymentPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          errorMessages: [],
        }
    }
    
    cardNonceResponseReceived = (errors, nonce, cardData, buyerVerificationToken) => {
        if (errors) {
          this.setState({ errorMessages: errors.map(error => error.message) })
          return
        }
    
        this.setState({ errorMessages: [] })
        alert("nonce created: " + nonce)
        // API.post('/payments', data: { nonce: nonce, token: buyerVerificationToken })
    }
    
    createVerificationDetails() {
        return {
          amount: '100.00',
          currencyCode: "USD",
          intent: "CHARGE",
          billingContact: {
            familyName: "Smith",
            givenName: "John",
            email: "jsmith@example.com",
            country: "GB",
            city: "London",
            addressLines: ["1235 Emperor's Gate"],
            postalCode: "SW7 4JA",
            phone: "020 7946 0532"
          }
        }
    }
    
    render() {
        return (
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
              <Stack spacing={4} w={'full'} maxW={'md'}>
                <Heading mr={8} fontSize={'4xl'} align={'center'} justify={'center'}>Pay Here!</Heading>
                    <SquarePaymentForm
                        sandbox={true}
                        formId="sq-form-id"
                        apiWrapper="sq-api-wrapper"
                        applicationId={'sandbox-sq0idb-IZLBS6FsWlwSg4DPLogkiQ'}
                        locationId={'LP08XW39WV1AH'}
                        cardNonceResponseReceived={this.cardNonceResponseReceived}
                        createVerificationDetails={this.createVerificationDetails}
                    >

                        <fieldset className="sq-fieldset">
                            <CreditCardNumberInput />
                            <div className="sq-form-third">
                                <CreditCardExpirationDateInput />
                            </div>

                            <div className="sq-form-third">
                                <CreditCardPostalCodeInput />
                            </div>

                            <div className="sq-form-third">
                                <CreditCardCVVInput />
                            </div>
                        </fieldset>

                    <CreditCardSubmitButton>
                        Pay $1.00
                    </CreditCardSubmitButton>
                    </SquarePaymentForm>
                </Stack>
            </Flex>
        </Stack>
        )
    }
}

export default PaymentPage;