import React from 'react';
import moment from 'moment';
import { chunk } from 'lodash';

import data from '../naytokset.json';

// Style
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Naytokset = () => {
  return (
    <Container>
      <Row className='row mt-3'>
        <Col xs={1} align='center'>ma</Col>
        <Col xs={2} align='center'>TI</Col>
        <Col xs={1} align='center'>ke</Col>
        <Col xs={2} align='center'>TO</Col>
        <Col xs={1} align='center'>pe</Col>
        <Col xs={1} align='center'>la</Col>
        <Col xs={4} align='center'>SU</Col>
      </Row>

      {fillCalendar()}

    </Container>
  );
};

export default Naytokset;