import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import {
  StyledStatistics,
  StyledTitle,
  StyledStatList,
  StyledItem,
} from './Statistics.module';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StyledStatistics>
      {title && <StyledTitle>{title}</StyledTitle>}

      <StyledStatList>
        {stats.map(stat => {
          return (
            <StyledItem key={stat.id} color={getRandomHexColor()}>
              <StatisticItem stat={stat} />
            </StyledItem>
          );
        })}
      </StyledStatList>
    </StyledStatistics>
  );
};
