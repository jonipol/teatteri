import React from 'react';
import moment from 'moment';
import '../timeTable.css';


const Play = (props) => {
  const play = props.play;
  let style = {fontSize: '1em'};

  const difference = moment().diff(play.date, 'hours');

  // If difference is positive -> date is in past
  if (difference > 0) {
    style.textDecoration = 'line-through';
    style.textDecorationColor = 'red';
    // solid|double|dotted|dashed|wavy|initial|inherit
    style.textDecorationStyle = 'wavy';
  }

  const time = moment(play.date);

  if (props.check) {
    return(
      <tr style={style} >
        <td className='timeTableLeft'>{time.format('dddd')}</td>
        <td className='timeTableCenter'>{time.format('DD.MM. [klo:] HH:mm')}</td> 
        <td className='timeTableRight'>{play.extra}</td>
      </tr>
    )
  }

  return(
    <tr style={style} >
      <td>{`${time.format('dddd')} ${time.format('DD.MM.')} klo: ${time.format('HH:mm')}`}</td>
    </tr>
  );
};

export default Play;
