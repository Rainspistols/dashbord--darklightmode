import React from 'react';
import styled from 'styled-components';

function Deposit({ data }) {
  const { property, moveInDate, rent, deposit, status } = data;

  return (
    <Container>
      <Property>
        <PropertyImg src={property.imageUrl} />
        <PropertyText>
          <PropertyStreet>{property.address.street}</PropertyStreet>
          <Subtitle>{property.address.subtitle}</Subtitle>
        </PropertyText>
      </Property>
      <MoveInDate>{moveInDate}</MoveInDate>
      <Rent>${rent}</Rent>
      <DepositWrapper>
        <Text>${deposit.amount}</Text>
        <Subtitle>{deposit.type}</Subtitle>
      </DepositWrapper>
      <Status>
        <StatusText>{status.message}</StatusText>
        {(() => {
          switch (status.level) {
            case 1:
              return <StatusIndicator color="#F17e7e" />;
            case 2:
              return <StatusIndicator color="#FFD056" />;
            case 3:
              return <StatusIndicator color="#75C282" />;
            default:
              return <StatusIndicator color="#AAA5A5" />;
          }
        })()}
      </Status>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  border-bottom: 1px solid rgba(190, 190, 190, 0.22);
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary};
  transition: all ease-in-out 300ms;

  &:hover {
    box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6);
    background-color: ${({ theme }) => theme.secondary};
    z-index: 2;
    position: relative;
  }

  @media (max-width: 400px) {
    padding: 0.5rem 0.5rem;
  }
`;

const Text = styled.h2`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  margin: 0;

  @media (max-width: 999px) {
    font-size: 0.6em;
  }
`;

const Subtitle = styled(Text)`
  display: flex;
  color: #b2bfe1;
  margin-top: 2px;
`;

const Property = styled.div`
  width: 30%;
  display: flex;
  align-items: center;

  @media (max-width: 699px) {
    width: 40%;
  }

  @media (max-width: 569px) {
    width: 50%;
  }
`;

const PropertyText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const PropertyStreet = styled(Text)`
  font-size: 1rem;

  @media (max-width: 999px) {
    font-size: 0.7em;
  }
`;

const PropertyImg = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
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

const DepositWrapper = styled.div`
  width: 15%;

  @media (max-width: 699px) {
    display: none;
  }
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 1rem;

  @media (max-width: 699px) {
    width: 40%;
    flex-grow: 0;
  }

  @media (max-width: 569px) {
    width: 10%;
  }
`;

const StatusIndicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
`;

const StatusText = styled(Text)`
  @media (max-width: 569px) {
    display: none;
  }
`;

export default Deposit;
