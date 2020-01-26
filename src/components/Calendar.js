import React from 'react';

import Day from './Day';

// Style
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Calendar = () => {
  const showStyle = {
    fontSize: '1.5em',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 0,
    paddingLeft: 0,
  };

  const noShowStyle = {
    fontSize: '0.9em',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 0,
    paddingLeft: 0,
  };

  return(
    <Container>
    <Row className='row mt-3' style={{borderBottom: '3px solid black'}}>
      <Col xs={1} align='center' style={noShowStyle} className=''>ma</Col>
      <Col xs={2} align='center' style={showStyle} className='border-left border-dark'>TI</Col>
      <Col xs={1} align='center' style={noShowStyle} className='border-left border-dark'>ke</Col>
      <Col xs={2} align='center' style={showStyle} className='border-left border-dark'>TO</Col>
      <Col xs={1} align='center' style={noShowStyle} className='border-left border-dark'>pe</Col>
      <Col xs={1} align='center' style={noShowStyle} className='border-left border-dark'>la</Col>
      <Col xs={4} align='center' style={showStyle} className='border-left border-dark'>SU</Col>
    </Row>

    <Row className='row border-bottom border-dark'>
      <Day text='29.6' noBorder='true'/>
      <Day text='30.6' colWidth='2'/>
      <Day text='1.7' />
      <Day text='2.7' colWidth='2'/>
      <Day text='3.7' />
      <Day text='4.7' />
      <Day text='5.7' event1Time = '13.00' colWidth='4'/>
    </Row>

    <Row className='row border-bottom border-dark'>
      <Day text='6.7' noBorder='true'/>
      <Day text='7.7' event1Time='19.00'/>
      <Day text='8.7' />
      <Day text='9.7' event1Time='19.00'/>
      <Day text='10.7' />
      <Day text='11.7' />
      <Day text='12.7' event1Time='13.00' event2Time='19.00'/>
    </Row>

    <Row className='row border-bottom border-dark'>
      <Day text='6.7' noBorder='true'/>
      <Day text='7.7' event1Time='19.00'/>
      <Day text='8.7' />
      <Day text='9.7' event1Time='19.00'/>
      <Day text='10.7' />
      <Day text='11.7' />
      <Day text='12.7' event1Time='13.00' event2Time='19.00'/>
    </Row>

    <Row className='row border-bottom border-dark'>
      <Day text='6.7' noBorder='true'/>
      <Day text='7.7' event1Time='19.00'/>
      <Day text='8.7' />
      <Day text='9.7' event1Time='19.00'/>
      <Day text='10.7' />
      <Day text='11.7' />
      <Day text='12.7' event1Time='13.00' event2Time='19.00'/>
    </Row>

    <Row className='row'>
      <Day text='6.7' noBorder='true'/>
      <Day text='7.7' event1Time='19.00'/>
      <Day text='8.7' />
      <Day text='9.7' event1Time='19.00'/>
      <Day text='10.7' />
      <Day text='11.7' />
      <Day text='12.7' event1Time='13.00' event2Time='19.00'/>
    </Row>
  </Container>
  );
};

export default Calendar;