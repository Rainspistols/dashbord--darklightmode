import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MenuItem({ title, icon, active, onClick }) {
  return (
    <Container to="/" active={active} onClick={onClick}>
      <Icon active={active}>{icon}</Icon>
      <Title active={active}>{title}</Title>
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

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.span`
  color: ${(props) => (props.active ? props.theme.activeMenu : '#AAA5A5')};
  font-size: 1rem;
  margin-right: 1rem;
`;

const Title = styled.h2`
  color: ${(props) => (props.active ? props.theme.activeMenu : '#AAA3A5')};
  font-size: 0.9rem;
  margin-right: 1rem;
  font-weight: 300;
`;

export default MenuItem;
