import React from 'react';
import moment from 'moment';
import { FacebookProvider, Page } from 'react-facebook';
import './app.css';

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

  // Setup locale for weekdays
  moment.locale('fi');
  moment.updateLocale('fi', {
    weekdays: [
      'Sunnuntai', 
      'Maanantai', 
      'Tiistai', 
      'Keskiviikko',
      'Torstai',
      'Perjantai',
      'Lauantai'
    ]
  });

  // maxWidth reference:
  // https://graphicdesign.stackexchange.com/questions/30731/what-width-should-i-design-for-when-creating-a-website

  // TODO: Facebook AppId + height
  return (
    <div>
      <Router>
        <Menu />
        <div style={{maxWidth: '960px', margin: 'auto'}}>
          <div className='mainDiv'>
            <Route exact path = '/' render = { () => <Home /> } />
            <Route exact path = '/sijainti' render = { () => <Location />} />
            <Route exact path = '/hinnasto' render = { () => <Prices />} />
            <Route exact path = '/ennen' render = { () => <Before />} />
            <Route exact path = '/historiaa' render = { () => <History />} />
            <Route exact path = '/aiempaa' render = { () => <Past /> } />
            <Route exact path = '/kuvagalleria' render = { () => <Gallery /> } />
           
          </div>
          <div className='fbDiv'>
            <FacebookProvider appId='1062617860758006'>
              <Page 
                href='https://www.facebook.com/ristin.kesateatteri' 
                tabs='timeline'
                  
              />
            </FacebookProvider>
          </div>
        </div>
        <div style={{clear: 'left'}}>
          <Footer />
        </div>
      </Router>
    </div>
  )
};

export default App;
