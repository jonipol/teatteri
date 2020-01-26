import React from 'react';

import Home from './components/Home';
import Menu from './components/Menu';
import Location from './components/Location';
import Prices from './components/Prices';
import Before from './components/Before';
import History from './components/History';
import Past from './components/Past';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const App = (props) => {

  // maxWidth reference:
  // https://graphicdesign.stackexchange.com/questions/30731/what-width-should-i-design-for-when-creating-a-website

  // TODO: Set maximum width to div. Prevent super wide view on big monitors.
  // max-width?
  return (
    <div>
      <Router>
        <Menu />
        {/*<Notification /> */}
        <div style={{maxWidth: '960px', margin: 'auto'}}>
          <Route exact path = '/' render = { () => <Home /> } />
          <Route exact path = '/sijainti' render = { () => <Location />} />
          <Route exact path = '/hinnasto' render = { () => <Prices />} />
          <Route exact path = '/ennen' render = { () => <Before />} />
          <Route exact path = '/historiaa' render = { () => <History />} />
          <Route exact path = '/aiempaa' render = { () => <Past /> } />
          <Route exact path = '/kuvagalleria' render = { () => <Gallery /> } />
          <Footer />
        </div>
      </Router>
    </div>
  )
};

export default App;
