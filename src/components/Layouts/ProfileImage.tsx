import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/55742179?s=400&u=25b1b1d3fbf7338ef8052fc5e44ce470621aa341&v=4';

const ProfileImageWrapper = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  display: block;
  margin: 30px auto;
`;

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />;
};

export default ProfileImage;
