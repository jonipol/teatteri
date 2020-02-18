import React from 'react';
import moment from 'moment';
import '../timeTable.css';


const Play = (props) => {
  const play = props.play;
  let style = {fontSize: '1em'};
  let dayStyle = {};

  const difference = moment().diff(play.date, 'hours');

  // If difference is positive -> date is in past
  if (difference > 0) {
    style.textDecoration = 'line-through';
    style.textDecorationColor = 'red';
    // solid|double|dotted|dashed|wavy|initial|inherit
    style.textDecorationStyle = 'solid';
  }

  const time = moment(play.date);
  const dayOfWeek = time.format('d');
  if (dayOfWeek === '0') {
    dayStyle.color = 'red';
  }

  return(
    <tr style={style}>
      <td>
        <span style={dayStyle}>{`${time.format('dddd')} `}</span>
        <span style={ {fontWeight: 'bold'} }>{`${time.format('DD.MM.')} `}</span> 
        {`klo: ${time.format('HH:mm')} ${play.extra}`}
      </td>
    </tr>
  );
};

export default Play;
