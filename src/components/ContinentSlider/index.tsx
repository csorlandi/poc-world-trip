import { Flex, Heading } from '@chakra-ui/react';

export default function ContinentSlider() {
  return (
    <Flex
      as="section"
      w="100%"
      maxWidth={1240}
      mx="auto"
      justifyContent="center"
    >
      <Heading fontWeight="500" textAlign="center" color="gray.600" mb={14}>
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>
    </Flex>
  );
}
