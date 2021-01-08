import React from 'react';
import styled from 'styled-components';
import Deposits from './Deposits/Deposits';
import Nav from './Nav';
import NewDepositBtn from './NewDepositBtn';

import { depositsData } from './Deposits/depositsData';

function Main() {
  return (
    <Container>
      <Nav />
      <NewDepositBtn />
      <Deposits
        title="Active Deposits"
        count={depositsData.active.length}
        data={depositsData.active}
      />
      <Deposits
        title="Closed Deposits"
        count={depositsData.closed.length}
        data={depositsData.closed}
      />
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;

  @media (max-width: 1299px) {
    margin-left: 10rem;
  }

  @media (max-width: 1199px) {
    margin-left: 5rem;
  }

  @media (max-width: 1099px) {
    padding: 0 2rem;
  }

  @media (max-width: 767px) {
    padding: 0 1rem;
    margin-left: 3rem;
  }
`;

export default Main;
