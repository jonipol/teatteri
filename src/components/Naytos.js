import React from 'react';
import Col from 'react-bootstrap/Col';

const Naytos = ({ text, event1Time, event2Time, colWidth}) => {

  const style = {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5
  };

  if (event1Time) {
    style.fontSize = 3 + 'vw';
  } else {
    style.fontSize = 2 + 'vw';
  }

  // TODO: Refactor to have only one return
  if (event2Time) {
    return(<Col xs={4} align='center' style={style} className='border-bottom border-dark'>{text} {event1Time} {event2Time}</Col>);    
  }

  let xs = 2
  if (colWidth)
    xs = colWidth;

  if (event1Time) {
    return(<Col xs={xs} align='center' style={style} className='border border-top-0 border-left-0 border-dark'>{text} {event1Time}</Col>);    
  }

  if (colWidth)
    xs = colWidth
  else
    xs = 1;

  return(<Col xs={xs} align='center' style={style} className='border border-top-0 border-left-0 border-dark'>{text}</Col>);

};

export default Naytos;