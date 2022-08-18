import { Divider as ChakraDivider } from '@chakra-ui/react';

export default function Divider() {
  return (
    <ChakraDivider
      w={90}
      borderWidth={2}
      borderColor="gray.700"
      rounded="full"
      alignSelf="center"
      my={14}
      mx="auto"
    />
  );
}
