import React from 'react';
import styled from 'styled-components';
import { IoAddCircle } from 'react-icons/io5';

function NewDepositBtn() {
  return (
    <AddBtn>
      <AddIcon />
    </AddBtn>
  );
}

const AddBtn = styled.a`
  border-radius: 25px;
  cursor: pointer;
  position: absolute;
  top: 6rem;
  right: 7rem;
`;
const AddIcon = styled(IoAddCircle)`
  color: ${({ theme }) => theme.header};
  width: 50px;
  height: 50px;
  box-sizing: border-box;
`;

export default NewDepositBtn;
