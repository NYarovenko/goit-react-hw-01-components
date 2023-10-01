import { StyledLabel, StyledPercentage } from './StatisticItem.module';

export const StatisticItem = ({ stat: { label, percentage } }) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledPercentage>{percentage}%</StyledPercentage>
    </>
  );
};
