import { Flex, Text } from '@chakra-ui/react';
import { ContinentStatistics } from '../../../types/continent';
import { StatisticItem } from './StatisticItem';

type DescriptionProps = {
  description: string;
  statistics: ContinentStatistics[];
};

export function Description({ description, statistics }: DescriptionProps) {
  return (
    <Flex w="100%" maxWidth={1160} mx="auto" my={20}>
      <Text fontSize={23} textAlign="justify" w="100%">
        {description}
      </Text>
      <Flex w="100%" align="center" justify="center" gap={12}>
        {statistics.map(statistic => (
          <StatisticItem key={statistic.id} statistic={statistic} />
        ))}
      </Flex>
    </Flex>
  );
}
