import React, { useState } from 'react';
import Calendar from './Calendar';
import News from './News';
import PlayList from './PlayList';
import Switch from 'react-switch';

const Home = () => {
  const [calendar , setCalendar] = useState(false);

  const handleCheck = (check) => {
    setCalendar(check);
  };
  
  return (
    <div>
      <News />
      <div style={{textAlign: "right"}}>
        Näytä kalenteri
        <Switch onChange={handleCheck} checked={calendar} />
      </div>
      <h2 style={{marginTop: '3vh', textAlign: 'center'}}>Esitysajat</h2>
      {calendar ? <Calendar /> : <PlayList />}
    </div>
  );
};

export default Home;