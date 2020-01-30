import React from 'react';
import moment from 'moment';

const Play = (props) => {
  const play = props.play;
  let style;

  const difference = moment().diff(play.date, 'hours');
  console.log(difference);

  // If difference is positive -> date is in past
  if (difference > 0) {
    style = {textDecoration: 'line-through'};
  }
  
  // style="text-decoration:line-through;"

  return(
    <div style={style}>
      {moment(play.date).format('dddd DD.MM. HH:mm')}{play.extra}
    </div>
  );
};

export default Play;
