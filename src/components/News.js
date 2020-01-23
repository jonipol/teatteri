import React from 'react';

import img from '../img/example.jpg';

const News = () => {


  return (
    <div>
      <img src={img}  style={{width: '95%', display: 'block', margin: 'auto'}} />
    </div>
  );
};

export default News;