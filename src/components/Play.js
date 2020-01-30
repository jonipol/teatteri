import React from 'react';
import moment from 'moment';

const Play = (props) => {
  const play = props.play;
  let style;
  moment.locale('fi');
  moment.updateLocale('en', {
    weekdays: [
      'Sunnuntai', 
      'Maanantai', 
      'Tiistai', 
      'Keskiviikko',
      'Torstai',
      'Perjantai',
      'Lauantai'
    ]
  });
  const difference = moment().diff(play.date, 'hours');
  console.log(difference);

  // If difference is positive -> date is in past
  if (difference > 0) {
    style = {textDecoration: 'line-through'};
  }
  
  // style="text-decoration:line-through;"

  return(
    <tr style={style}>
      <td>{moment(play.date).format('dddd')}</td>
      <td>{moment(play.date).format('DD.MM. HH:mm')}</td>
      <td>{play.extra}</td>
    </tr>
  );
};

export default Play;
