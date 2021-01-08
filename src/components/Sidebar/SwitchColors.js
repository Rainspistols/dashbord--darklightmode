import React from 'react';
import styled from 'styled-components';

function SwitchColors({ themePalletes, activeTheme, onSwitchColors }) {
  return (
    <Container className="switchColors">
      {themePalletes.map((themePallete, index) => (
        <Label
          htmlFor={themePallete.name}
          key={index}
          primary={themePallete.primary}
          secondary={themePallete.secondary}
        >
          <input
            className="visually-hidden"
            type="radio"
            aria-hidden="true"
            id={themePallete.name}
            value={themePallete.name}
            name="change-color-theme"
            checked={activeTheme === themePallete.name ? 'checked' : null}
            onChange={onSwitchColors}
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
  padding: 0.5rem;
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

  @media (max-width: 1199px) {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;

    &:not(:last-of-type) {
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
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
