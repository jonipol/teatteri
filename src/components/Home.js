import React from 'react';
import Calendar from './Calendar';
import News from './News';



const Home = () => {
  return (
    <div style={{paddingTop: '1vh'}}>
      <News />
      <h2 style={{marginTop: '3vh', textAlign: 'center'}}>Esitysajat</h2>
      <Calendar />
    </div>
  );
};

export default Home;