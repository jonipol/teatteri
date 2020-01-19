import React from 'react';

import Esitys from './components/Esitys';



/* import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'; */

const App = (props) => {
  return (
    <div>
      <Esitys />
     {/*  <Router> */}
        {/*<MenuComponent /> */}
        {/*<Notification /> */}
{/*         <Route exact path='/' render = { () => {
          return (
            <div>
              <h1>Näytökset</h1>
            </div>
          );
        }} />
        <Route exact path = '/sijainti' render = { () => <About />} />
        <Route exact path = '/hinnasto' render = { () => <Prices />} />
        <Route exact path = '/ennen' render = { () => <Before />} />
        <Route exact path = '/historiaa' render = { () => <History />} />
      </Router> */}

    </div>
  )

};

export default App;
