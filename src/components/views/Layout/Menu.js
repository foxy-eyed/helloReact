import React from 'react';
import { Nav, NavItem } from 'reactstrap';

import NavLink from '~/src/components/elements/NavLink';
import { cartPath, contactPath, rootPath } from '~/src/helpers/routes';

export default () => (
  <Nav vertical className="nav-pills my-4">
    <NavItem>
      <NavLink to={rootPath()} exact strict>
        Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to={contactPath()}>
        Contacts
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to={cartPath()}>
        Shopping Cart
      </NavLink>
    </NavItem>
    <hr />
    <NavItem className="border-top border-primary">
      <a href="/o-o-o-p-s" className="nav-link">
        Oooops!
      </a>
    </NavItem>
  </Nav>
);
