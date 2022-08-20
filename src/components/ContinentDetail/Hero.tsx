import { Box, Flex, Heading } from '@chakra-ui/react';

type HeroProps = {
  backgroundImage: string;
  continentName: string;
};

export function Hero({ backgroundImage, continentName }: HeroProps) {
  return (
    <Flex
      w="100%"
      maxWidth={1440}
      h={['10rem', '15rem', '20rem', '27rem']}
      mx="auto"
      position="relative"
      backgroundImage={`url(${backgroundImage})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box w="100%" h="100%" backgroundColor="rgba(0,0,0,0.1)">
        <Heading
          position="absolute"
          bottom={59}
          left={140}
          color="gray.200"
          fontWeight="600"
        >
          {continentName}
        </Heading>
      </Box>
    </Flex>
  );
}
