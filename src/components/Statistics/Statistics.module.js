import styled from 'styled-components';

export const StyledStatistics = styled.section`
  margin: 50px auto 0;
  width: fit-content;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const StyledTitle = styled.h2`
  text-align: center;
`;

export const StyledStatList = styled.ul`
  display: flex;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  background-color: ${({ color }) => {
    return color;
  }};
`;
