import styled from 'styled-components';

export const StyledProfile = styled.div`
  margin: 50px auto 0;
  width: fit-content;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const StyledDescription = styled.div`
  margin: 30px auto;
  width: fit-content;
`;

export const StyledPhotoUser = styled.img`
  width: 125px;
  border: 1px solid gray;
  border-radius: 50%;
  margin: 0 auto;
`;

export const StyledName = styled.p`
  margin-top: 20px;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
`;

export const StyledTag = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: gray;
  text-align: center;
`;

export const StyledLocation = styled.p`
  margin-top: 5px;
  font-size: 20px;
  color: gray;
  text-align: center;
`;

export const StyledStats = styled.ul`
  display: flex;
  flex-direction: row;
  border-top: 1px solid gray;

  :not(:last-child) {
    border-right: 1px solid gray;
  }
`;

export const StyledStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background: lightgrey;
  padding: 15px;
`;

export const StyledLabel = styled.span`
  font-size: 16px;
  color: gray;
  text-align: center;
`;

export const StyledQuantity = styled.span`
  margin-top: 5px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;
