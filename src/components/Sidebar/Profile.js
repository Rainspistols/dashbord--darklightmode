import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/images/profileImg.jpeg';

function Profile() {
  return (
    <Container>
      <ProfileImg src={Image} />
      <ProfileName>Scott Grant</ProfileName>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5rem;
`;

const ProfileImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50px;
`;

const ProfileName = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;

export default Profile;
