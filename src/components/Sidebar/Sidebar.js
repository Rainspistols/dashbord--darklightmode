import React from 'react';
import styled from 'styled-components';
// components
import Menu from './Menu/Menu';
import Profile from './Profile';
import SwitchColors from './SwitchColors';

function Sidebar({ themePalletes, activeTheme, onSwitchColors,setActiveTheme }) {
  return (
    <Container>
      <Profile />
      <Menu />
      <SwitchColors
        themePalletes={themePalletes}
        activeTheme={activeTheme}
        onSwitchColors={onSwitchColors}
        setActiveTheme={setActiveTheme}
      />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Sidebar;
