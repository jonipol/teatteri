import React from 'react';
import Col from 'react-bootstrap/Col';

const Day = ({ text, event1Time, event2Time, colWidth, noBorder = false}) => {

  //TODO: Color coding + visual representation of days that are in past

  const style = {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5
  };

  if (event1Time) {
    style.fontSize = '1.5em';
  } else {
    style.fontSize = '0.9em';
  }

  let border = 'border-left border-dark';
  if (noBorder)
    border = '';
  // TODO: Refactor to have only one return
  if (event2Time) {
    return(
      <Col 
        xs={4} 
        align='center' 
        style={style} 
        className= {border}>
          {text} <br /> {event1Time} & {event2Time}
      </Col>
    );    
  }

  let xs = 2
  if (colWidth)
    xs = colWidth;

  if (event1Time) {
    return(
      <Col 
        xs={xs} 
        align='center' 
        style={style} 
        className= {border}>
          {text}<br />{event1Time}
      </Col>
    );
  }

  if (colWidth)
    xs = colWidth
  else
    xs = 1;

  return(
    <Col 
      xs={xs}
      align='center'
      style={style}
      className= {border}>
        {text}
    </Col>
  );

};

export default Day;