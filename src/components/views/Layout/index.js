import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Menu from './Menu';

export default ({ children }) => (
  <Fragment>
    <Header />
    <Container fluid>
      <Row>
        <Sidebar>
          <Menu />
        </Sidebar>
        <Main>
          {children}
        </Main>
      </Row>
    </Container>
  </Fragment>
);
