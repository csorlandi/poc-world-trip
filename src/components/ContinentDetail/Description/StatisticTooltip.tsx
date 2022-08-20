import { Image, Tooltip } from '@chakra-ui/react';

type StatisticTooltipProps = {
  label: string;
};

export function StatisticTooltip({ label }: StatisticTooltipProps) {
  return (
    <Tooltip label={label} hasArrow>
      <Image src="/images/detail/tooltip-icon.svg" display="inline" ml={1} />
    </Tooltip>
  );
}
