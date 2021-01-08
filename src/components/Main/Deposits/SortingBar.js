import React from 'react';
import styled from 'styled-components';

function SortingBar() {
  return (
    <Container>
      <Property>Property</Property>
      <MoveInDate>Move In Date</MoveInDate>
      <Rent>Rent</Rent>
      <Deposit>Deposit</Deposit>
      <Status>Status</Status>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0.4rem 1rem;
  background-color: ${({ theme }) => theme.secondary};
  margin: 2rem 0;
  border-radius: 5px;
`;

const Text = styled.h2`
  font-size: 0.6rem;
  text-transform: uppercase;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
`;

const Property = styled(Text)`
  width: 30%;

  @media (max-width: 699px) {
    width: 40%;
  }

  @media (max-width: 569px) {
    width: 50%;
  }
`;

const MoveInDate = styled(Text)`
  width: 15%;

  @media (max-width: 699px) {
    width: 20%;
  }

  @media (max-width: 569px) {
    width: 40%;
    text-align: center;
  }
`;

const Rent = styled(Text)`
  width: 10%;

  @media (max-width: 699px) {
    display: none;
  }
`;

const Deposit = styled(Text)`
  width: 15%;

  @media (max-width: 699px) {
    display: none;
  }
`;

const Status = styled(Text)`
  margin-left: 1rem;

  @media (max-width: 699px) {
    width: 40%;
  }

  @media (max-width: 569px) {
    width: 10%;
  }
`;

export default SortingBar;
