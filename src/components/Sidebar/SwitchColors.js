import React from 'react';
import styled from 'styled-components';

function SwitchColors({ changeThemeColor = null, themePalletes }) {
  return (
    <Container className="switchColors">
      {themePalletes.map((themePallete, index) => (
        <Label
          htmlFor={`checkbox${index}`}
          key={index}
          primary={themePallete.primary}
          secondary={themePallete.secondary}
        >
          <input
            className="visually-hidden"
            type="radio"
            aria-hidden="true"
            id={`checkbox${index}`}
            name="change-color-theme"
          />
          <SwitchMarker
            primary={themePallete.primary}
            secondary={themePallete.secondary}
            className="switchColors__marker"
            aria-hidden="true"
          >
            <span className="marker__colorLeft" />
            <span className="marker__colorRight" />
          </SwitchMarker>
        </Label>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: ${({ theme }) => theme.switchPadding} 0;
  background: rgba(0, 0, 0, 0.05);
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

const Label = styled.label`
  width: 2rem;
  height: 2rem;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid ${(props) => props.primary};

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
`;

const SwitchMarker = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .marker__colorLeft {
    background: ${(props) => props.primary};
    width: 100%;
  }
  .marker__colorRight {
    background: ${(props) => props.secondary};
    display: block;
    width: 100%;
  }
`;

export default SwitchColors;
