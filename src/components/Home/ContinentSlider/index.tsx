import { Box, Flex, Heading } from '@chakra-ui/react';
import Swiper from './Swiper';

export function ContinentSlider() {
  return (
    <Flex
      as="section"
      direction="column"
      w="100%"
      maxWidth={1240}
      mx="auto"
      justifyContent="center"
    >
      <Heading fontWeight="500" textAlign="center" color="gray.600" mb={14}>
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>

      <Box minH={450} mb={10}>
        <Swiper />
      </Box>
    </Flex>
  );
}
