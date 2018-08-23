import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

import Header from '~/src/components/views/Layout/Header';
import Sidebar from '~/src/components/views/Layout/Sidebar';
import Main from '~/src/components/views/Layout/Main';
import Menu from '~/src/components/views/Layout/Menu';

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
