import React from 'react';
import Col from 'react-bootstrap/Col';

const Naytos = ({ text, event1Time, event2Time, colWidth}) => {

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

  if (event2Time) {
    return(<Col xs={4} align='center' style={showStyle} className='border-bottom border-dark'>{text} {event1Time} {event2Time}</Col>);    
  }

  let xs = 2
  if (colWidth)
    xs = colWidth;

  if (event1Time) {
    return(<Col xs={xs} align='center' style={showStyle} className='border border-top-0 border-left-0 border-dark'>{text} {event1Time}</Col>);    
  }

  if (colWidth)
    xs = colWidth
  else
    xs = 1;

  return(<Col xs={xs} align='center' style={noShowStyle} className='border border-top-0 border-left-0 border-dark'>{text}</Col>);

};

export default Naytos;