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
        <Subtitle>${deposit.type}</Subtitle>
      </DepositWrapper>
      <Status>
        <Text>{status.message}</Text>
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
  padding: 1rem 0;
  border-bottom: 1px solid rgba(190, 190, 190, 0.22);
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary};
  transition: all ease-in-out 300ms;

  &:hover {
    /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const Text = styled.h2`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  margin: 0;
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
`;

const PropertyText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const PropertyStreet = styled(Text)`
  font-size: 1rem;
`;

const PropertyImg = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`;

const MoveInDate = styled(Text)`
  width: 15%;
`;

const Rent = styled(Text)`
  width: 10%;
`;

const DepositWrapper = styled.div`
  width: 15%;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
`;

const StatusIndicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  margin-left: 1rem;
  position: absolute;
  right: 7rem;
`;

export default Deposit;
