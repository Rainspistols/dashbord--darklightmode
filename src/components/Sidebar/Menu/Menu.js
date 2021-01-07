import React, { useState } from 'react';
import styled from 'styled-components';
import { menuData } from './menuData';
import MenuItem from './MenuItem';

function Menu() {
  const [activeItem, setActiveItem] = useState('Home');

  const onItemClick = (e) => {
    setActiveItem(e.target.innerText);
  };

  return (
    <Container>
      {menuData.map((menuItem, index) => (
        <MenuItem
          onClick={onItemClick}
          active={activeItem === menuItem.title ? 'true' : null}
          key={index}
          {...menuItem}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export default Menu;
