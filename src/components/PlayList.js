import React from 'react';
import Play from './Play';

import json from '../naytokset.json';

const PlayList = () => {


  return(
    <div>
      <ul style={{listStyle: 'none'}}>
        {json.shows.map(play => (
          <li>
            {<Play play={play} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayList;