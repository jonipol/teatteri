import React from 'react';

import img from '../img/example.jpg';

const News = () => {


  return (
    <article>
      <img src={img}  style={{width: '95%', display: 'block', margin: 'auto'}} />
    </article>
  );
};

export default News;