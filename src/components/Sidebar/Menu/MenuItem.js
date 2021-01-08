import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MenuItem({ title, icon, active, onClick }) {
  return (
    <Container to="/" active={active} onClick={onClick} data-text={title}>
      <Icon data-text={title} active={active}>
        {icon}
      </Icon>
      <Title active={active} data-text={title}>
        {title}
      </Title>
    </Container>
  );
}

const Container = styled(Link)`
  border-left: 3px solid ${(props) => (props.active ? props.theme.activeMenu : 'transparent')};
  width: 100%;
  padding: 0.3rem;
  padding-left: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.2s all ease-in-out;
  text-decoration: none;
  color: inherit;
  z-index: 2;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1199px) {
    padding-left: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Icon = styled.span`
  color: ${(props) => (props.active ? props.theme.activeMenu : props.theme.inactiveMenu)};
  font-size: 1rem;
  margin-right: 1rem;

  @media (max-width: 1199px) {
    font-size: 1.5rem;
    margin: 0;
  }
`;

const Title = styled.h2`
  color: ${(props) => (props.active ? props.theme.activeMenu : props.theme.inactiveMenu)};
  font-size: 0.9rem;
  margin-right: 1rem;
  font-weight: 300;

  @media (max-width: 1199px) {
    display: none;
  }
`;

export default MenuItem;
