import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { MostVisitedCities } from '../../../types/continent';

type CityItemProps = {
  city: MostVisitedCities;
};

export function CityItem({ city }: CityItemProps) {
  return (
    <Flex direction="column">
      <Image
        src={city.image}
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
      />
      <Flex
        borderBottomLeftRadius={8}
        borderBottomRightRadius={8}
        borderWidth={1}
        borderTopWidth={0}
        borderColor="rgba(255, 186, 8, 0.5)"
        px={6}
        pt={5}
        p={6}
        justify="space-between"
        alignItems="center"
      >
        <Box>
          <Text fontSize={20} color="gray.600" fontWeight="600">
            {city.name}
          </Text>
          <Text mt={3} fontSize={16} fontWeight="500" color="gray.400">
            {city.country}
          </Text>
        </Box>
        <Image src={city.countryFlag} w="30px" h="30px" />
      </Flex>
    </Flex>
  );
}
