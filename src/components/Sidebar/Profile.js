import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/images/profileImg.jpg';

function Profile() {
  return (
    <Container className="Profile">
      <ProfileImg src={Image} />
      <ProfileName>Max Galchenko</ProfileName>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1199px) {
    margin-top: 3rem;
  }
`;

const ProfileImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50px;

  @media (max-width: 1199px) {
    border-radius: 0;
    clip-path: polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%);
  }

  @media (max-width: 767px) {
    width: 3rem;
    height: 3rem;
  }
`;

const ProfileName = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.activeMenu};

  @media (max-width: 1199px) {
    text-align: center;
    font-size: 0.8rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export default Profile;
