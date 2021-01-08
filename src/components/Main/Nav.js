import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/images/profileImg.jpg';
import { RiMessage3Line } from 'react-icons/ri';

function Nav() {
  return (
    <Container>
      <MessageIconWrapper>
        <MessageIcon />
      </MessageIconWrapper>
      <ProfileImg src={Image} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 3rem;
`;

const ProfileImg = styled.img`
  height: 2rem;
  margin: 0 1rem;
  cursor: pointer;
  border-radius: 50%;
`;

const MessageIcon = styled(RiMessage3Line)`
  font-size: 20px;
  cursor: pointer;
`;

const MessageIconWrapper = styled.div`
  position: relative;

  &::after {
    position: absolute;
    background: ${({ theme }) => theme.secondary};
    padding: 1rem;
    border-radius: 1rem;
    content: 'You have no messages.';
    top: 50%;
    right: calc(100% + 1rem);
    transform: translateY(-50%);
    display: none;
    white-space: nowrap;
  }

  &:hover&::after {
    display: block;
  }
`;

export default Nav;
