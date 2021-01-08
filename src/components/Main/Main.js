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
`;

export default Main;
