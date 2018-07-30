import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header() {
  return (
    <Navbar light color="light">
      <NavbarBrand className="mb-0 h1">
        <span role="img" aria-label="fruits">
          🍎
        </span>
        Healthy Food Shop
      </NavbarBrand>
    </Navbar>
  );
}

export default Header;
