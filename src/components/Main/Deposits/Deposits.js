import React, { useState } from 'react';
import styled from 'styled-components';
import AllDepositsBtn from './AllDepositsBtn';
import Deposit from './Deposit';
import SortingBar from './SortingBar';

function Deposits({ title, data, count }) {
  const [allDepostisShown, setAllDepositsShown] = useState(false);

  const onAllDepositsBtn = () => {
    setAllDepositsShown(!allDepostisShown);
  };

  return (
    <div>
      <Title>
        {title}
        <DepositsCount>{count}</DepositsCount>
      </Title>
      <SortingBar />
      {data.map((deposit, index) =>
        !allDepostisShown ? (
          index < 3 && <Deposit data={deposit} key={deposit.property.address.street} />
        ) : (
          <Deposit data={deposit} key={deposit.property.address.street} />
        )
      )}
      <AllDepositsBtn
        title={title}
        onClick={onAllDepositsBtn}
        allDepostisShown={allDepostisShown}
      />
    </div>
  );
}

const Title = styled.h2`
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
`;

const DepositsCount = styled.div`
  margin-left: 1rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.headerNumber};
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export default Deposits;
