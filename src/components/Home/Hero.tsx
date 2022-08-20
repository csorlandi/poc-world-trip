import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Hero() {
  return (
    <Flex
      backgroundImage="/images/home/hero-background.png"
      backgroundSize="cover"
      w="100%"
      maxWidth={1440}
      minHeight={335}
      mx="auto"
      align="center"
      justifyContent="space-around"
    >
      <Box color="gray.50">
        <Heading fontWeight="500" maxWidth="426px" fontSize={36}>
          5 Continentes,
          <br /> infinitas possibilidades.
        </Heading>
        <Text
          mt={5}
          maxWidth={524}
          fontSize={20}
          fontWeight="400"
          color="gray.400"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Image
        src="/images/home/airplane.png"
        mb={-32}
        alt="Avião voando sobre nuvens"
      />
    </Flex>
  );
}
