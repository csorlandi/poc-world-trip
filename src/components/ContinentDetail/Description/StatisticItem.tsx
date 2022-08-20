import { Box, Text } from '@chakra-ui/react';
import { ContinentStatistics } from '../../../types/continent';
import { StatisticTooltip } from './StatisticTooltip';

type Statistic = Omit<ContinentStatistics, 'id'>;

type StatisticItemProps = {
  statistic: Statistic;
};

export function StatisticItem({ statistic }: StatisticItemProps) {
  const { quantity, label, tooltipText } = statistic;

  return (
    <Box textAlign="center">
      <Text fontWeight="600" fontSize={48} color="#FFBA08" lineHeight="48px">
        {quantity}
      </Text>
      <Text fontWeight="600" fontSize={24}>
        {label}
        {tooltipText && <StatisticTooltip label={tooltipText} />}
      </Text>
    </Box>
  );
}
