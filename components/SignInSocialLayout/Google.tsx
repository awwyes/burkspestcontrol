import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Text } from '@chakra-ui/react';

export default function GoogleButton() {
  return (
    <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
        <Center>
            <Text>Sign in with Google</Text>
        </Center>
    </Button>
  );
}

