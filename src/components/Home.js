import React from 'react';
import News from './News';
import PlayList from './PlayList';

const Home = () => {

  return (
    <article>
      <News />
      <h2 style={{marginTop: '3vh', textAlign: 'center'}}>Esitysajat</h2>
      <PlayList />
    </article>
  );
};

export default Home;