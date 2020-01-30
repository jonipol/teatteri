import React from 'react';
import Play from './Play';

import Table from 'react-bootstrap/Table';

import json from '../naytokset.json';

const PlayList = () => {


  return(
    <div style={{alignItems: 'center', textAlign: 'center', }}>
      <Table borderless hover >
        <tbody>
          {json.shows.map((play) => (
            <Play play={play} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PlayList;