import React from 'react';
import Play from './Play';

import '../timeTable.css';

import json from '../naytokset.json';

const PlayList = () => {
  return(
    <div style={{textAlign: 'center'}}>
      <table className='timeTable'>
        <tbody>
          {json.shows.map((play) => (
            <Play play={play} key={play.date} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayList;