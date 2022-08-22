import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { MostVisitedCities } from '../../../types/continent';
import { CityItem } from './CityItem';

type MostVisitedCitiesProps = {
  mostVisitedCities: MostVisitedCities[];
};

export function MostVisitedCities({
  mostVisitedCities,
}: MostVisitedCitiesProps) {
  return (
    <Flex w="100%" maxWidth={1160} mx="auto" my={20} direction="column">
      <Heading fontSize={36} fontWeight="500">
        Cidades +100
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={12} mt={10}>
        {mostVisitedCities.map(city => (
          <CityItem city={city} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
