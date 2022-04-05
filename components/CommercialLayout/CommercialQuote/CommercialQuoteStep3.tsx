import { Box, Flex, FormLabel, Input, Select, useColorModeValue } from "@chakra-ui/react";


export default function Step3() {
    return (
        <Flex>
            <Box bgColor={useColorModeValue('white', 'black')} ml={12}>
                <FormLabel>Business Address *</FormLabel>
                <Input id="business-address" placeholder="Business Address" isRequired />
                <FormLabel>City *</FormLabel>
                <Input id="city" placeholder="City" />
                <FormLabel>Phone *</FormLabel>
                <Input id="phone" placeholder="Phone" isRequired />
                <FormLabel>Email *</FormLabel>
                <Input id="email" placeholder="Email Address" isRequired />
                <FormLabel>Preferred Time of Day</FormLabel>
                <Select id="preferred-time">
                    <option value="6am-8am">6AM - 8AM</option>
                    <option value="8am-10am">8AM - 10AM</option>
                    <option value="10am-12pm">10AM - 12PM</option>
                    <option value="12pm-2pm">12PM - 2PM</option>
                    <option value="2pm-4pm">2PM - 4PM</option>
                    <option value="4pm-6pm">4PM - 6PM</option>
                    <option value="6pm-8pm">6PM - 8PM</option>
                </Select>
            </Box>
        </Flex>
    )
}