import React from 'react';

import Esitys from './components/Esitys';
import Menu from './components/Menu';
import About from './components/About';
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

  const bgBlue = '#003D73';
  const textBlue = '#1ECFD6';
  const shadow = '#0878A4';
  const orange = '#C05640';

  // maxWidth reference:
  // https://graphicdesign.stackexchange.com/questions/30731/what-width-should-i-design-for-when-creating-a-website

  // TODO: Set maximum width to div. Prevent super wide view on big monitors.
  // max-width?
  return (
    <div style={{background: bgBlue , color: textBlue}}>
      <Router>
        <Menu />
        {/*<Notification /> */}
        <div style={{maxWidth: '960px', margin: 'auto'}}>
          <Route exact path = '/' render = { () => <Esitys /> } />
          <Route exact path = '/sijainti' render = { () => <About />} />
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
