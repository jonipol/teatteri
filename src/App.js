import React from 'react';

import Esitys from './components/Esitys';
import Menu from './components/Menu';
import About from './components/About';
import Prices from './components/Prices';
import Before from './components/Before';
import History from './components/History';
import Past from './components/Past';
import Gallery from './components/Gallery';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const App = (props) => {
  return (
    <div>
      <Router>
        <Menu />
        
        {/*<Notification /> */}
        <Route exact path = '/' render = { () => <Esitys /> } />
        <Route exact path = '/sijainti' render = { () => <About />} />
        <Route exact path = '/hinnasto' render = { () => <Prices />} />
        <Route exact path = '/ennen' render = { () => <Before />} />
        <Route exact path = '/historiaa' render = { () => <History />} />
        <Route exact path = '/aiempaa' render = { () => <Past /> } />
        <Route exact path = '/kuvagalleria' render = { () => <Gallery /> } />
      </Router>

    </div>
  )

};

export default App;
