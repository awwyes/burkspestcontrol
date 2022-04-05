import { Box, Flex, FormLabel, Input, Select, useColorModeValue } from "@chakra-ui/react";

export default function Step2() {
    return (
        <Flex>
             <Box bgColor={useColorModeValue('white', 'black')} ml={12}>
                <FormLabel>First Name *</FormLabel>
                <Input id="first-name" placeholder="First Name" isRequired />
                <FormLabel>Last Name *</FormLabel>
                <Input id="last-name" placeholder="Last Name" isRequired />
                <FormLabel>Company or Business *</FormLabel>
                <Input id="company-name" placeholder="Company or Business Name" isRequired />
                <FormLabel>Industry</FormLabel>
                <Select id="industry" placeholder="Select Industry">
                    <option value="medical">Medical</option>
                    <option value="food services">Food Services</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="retail">Retail</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="manufacturing/warehouse">Manufacturing/Warehouse</option>
                    <option value="community">Community</option>
                    <option value="other">Other</option>
                </Select>
            </Box>
        </Flex>
    )
}