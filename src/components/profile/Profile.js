import {
  StyledProfile,
  StyledPhotoUser,
  StyledStats,
  StyledStatsItem,
  StyledLabel,
  StyledQuantity,
  StyledDescription,
  StyledName,
  StyledTag,
  StyledLocation,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <StyledProfile>
      <StyledDescription>
        <StyledPhotoUser src={avatar} alt={'User ' + username} />
        <StyledName>{username}</StyledName>
        <StyledTag>@_{tag}</StyledTag>
        <StyledLocation>{location}</StyledLocation>
      </StyledDescription>

      <StyledStats>
        <StyledStatsItem>
          <StyledLabel>Followers</StyledLabel>
          <StyledQuantity>{followers}</StyledQuantity>
        </StyledStatsItem>
        <StyledStatsItem>
          <StyledLabel>Views</StyledLabel>
          <StyledQuantity>{views}</StyledQuantity>
        </StyledStatsItem>
        <StyledStatsItem>
          <StyledLabel>Likes</StyledLabel>
          <StyledQuantity>{likes}</StyledQuantity>
        </StyledStatsItem>
      </StyledStats>
    </StyledProfile>
  );
};
