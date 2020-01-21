import React from 'react';
import Naytos from './Naytos';

// Style
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Naytokset = () => {

  const showStyle = {
    fontSize: 3 + 'vw',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 0,
    paddingLeft: 0,
  };

  const noShowStyle = {
    fontSize: 2 + 'vw',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 0,
    paddingLeft: 0,
  };

  return (
    <Container>
      <Row className='row mt-3'>
        <Col xs={1} align='center' style={noShowStyle} className='border border-top-0 border-left-0 border-dark'>ma</Col>
        <Col xs={2} align='center' style={showStyle} className='border border-top-0 border-left-0 border-dark'>TI</Col>
        <Col xs={1} align='center' style={noShowStyle} className='border border-top-0 border-left-0 border-dark'>ke</Col>
        <Col xs={2} align='center' style={showStyle} className='border border-top-0 border-left-0 border-dark'>TO</Col>
        <Col xs={1} align='center' style={noShowStyle} className='border border-top-0 border-left-0 border-dark'>pe</Col>
        <Col xs={1} align='center' style={noShowStyle} className='border border-top-0 border-left-0 border-dark'>la</Col>
        <Col xs={4} align='center' style={showStyle} className='border-bottom border-dark'>SU</Col>
      </Row>

      <Row className='row'>
        <Naytos text='29.6' />
        <Naytos text='30.6' colWidth='2'/>
        <Naytos text='1.7' />
        <Naytos text='2.7' colWidth='2'/>
        <Naytos text='3.7' />
        <Naytos text='4.7' />
        <Naytos text='5.7' event1Time = '13.00' colWidth='4'/>
      </Row>

      <Row className='row'>
        <Naytos text='6.7' />
        <Naytos text='7.7' event1Time='19.00'/>
        <Naytos text='8.7' />
        <Naytos text='9.7' event1Time='19.00'/>
        <Naytos text='10.7' />
        <Naytos text='11.7' />
        <Naytos text='12.7' event1Time='13.00' event2Time='19.00'/>
      </Row>

      <Row className='row'>
        <Naytos text='6.7' />
        <Naytos text='7.7' event1Time='19.00'/>
        <Naytos text='8.7' />
        <Naytos text='9.7' event1Time='19.00'/>
        <Naytos text='10.7' />
        <Naytos text='11.7' />
        <Naytos text='12.7' event1Time='13.00' event2Time='19.00'/>
      </Row>

      <Row className='row'>
        <Naytos text='6.7' />
        <Naytos text='7.7' event1Time='19.00'/>
        <Naytos text='8.7' />
        <Naytos text='9.7' event1Time='19.00'/>
        <Naytos text='10.7' />
        <Naytos text='11.7' />
        <Naytos text='12.7' event1Time='13.00' event2Time='19.00'/>
      </Row>

      <Row className='row'>
        <Naytos text='6.7' />
        <Naytos text='7.7' event1Time='19.00'/>
        <Naytos text='8.7' />
        <Naytos text='9.7' event1Time='19.00'/>
        <Naytos text='10.7' />
        <Naytos text='11.7' />
        <Naytos text='12.7' event1Time='13.00' event2Time='19.00'/>
      </Row>

    </Container>
  );
};

export default Naytokset;