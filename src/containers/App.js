import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CatalogPage from './CatalogPage';
import Header from '../components/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Container fluid>
        <Row>
          <CatalogPage />
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
