import React, { useState } from 'react';
import styled from 'styled-components';
import { menuData } from './menuData';
import MenuItem from './MenuItem';

function Menu() {
  const [activeItem, setActiveItem] = useState('Home');

  const onItemClick = (e) => {
    if (e.target.dataset.text) {
      setActiveItem(e.target.dataset.text);
    } else {
      if (e.target.ownerSVGElement) {
        setActiveItem(e.target.ownerSVGElement.parentElement.dataset.text);
      }
    }
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
