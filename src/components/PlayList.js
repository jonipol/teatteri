import React, { useState } from 'react';
import Play from './Play';

import '../timeTable.css';

import Switch from 'react-switch';
/* import Table from 'react-bootstrap/Table'; */

import json from '../naytokset.json';

const PlayList = () => {
  const [styleCheck, setStyleCheck] = useState(false);

  const handleCheck = (check) => {
    setStyleCheck(check);
  };

  return(
    <div style={{textAlign: 'center'}}>
      
      <Switch onChange={handleCheck} checked={styleCheck} />
      <table className='timeTable'>
        <tbody>
          {json.shows.map((play) => (
            <Play play={play} key={play.date} check={styleCheck} />
          ))}
        </tbody>
      </table>
      {/* <Table borderless hover size='sm' >
        <tbody>
          {json.shows.map((play) => (
            <Play play={play} key={play.date}/>
          ))}
        </tbody>
      </Table> */}
    </div>
  );
};

export default PlayList;