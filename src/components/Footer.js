import React from 'react';
import Tooltip from 'react-tooltip-lite';

import fbLogo from '../img/fbLogo.png';
import liperiLogo from '../img/liperi.png';

const Footer = () => {
  const tooltipBgColor = 'black';
  const tooltipTextColor = 'white';


  return(
    <footer>
      <p style={{fontSize: '1.25em', fontWeight: 'bold'}}>
        Tiedustelut ja ryhmävaraukset <br /> 
        puh. 040 703 7478 <br />
        Ristinkyläntie 1, Liperi
      </p>
      <div style={{textAlign: 'right', width: '50%', float: 'left', backgroundColor: 'inherit'}}>
        <Tooltip 
          content = 'Teatterin facebook sivuille'
          background = {tooltipBgColor}
          color = {tooltipTextColor}
        >
          <a 
            href = 'https://www.facebook.com/ristin.kesateatteri' 
            target = '_blank' 
            rel = 'noopener noreferrer'
            style = { {fontSize: '1.3em'} }
            >
              <img 
                src = {fbLogo}
                style = { {width: '2em', height: '2em'} }
                alt = 'fb-logo'
              />
              Teatterin fb-sivuille
          </a>
        </Tooltip>
      </div>
      <div style={{ width: '50%', float: 'left', backgroundColor: 'inherit'}}>
        <Tooltip
          content = 'Liperin kotisivuille?????'
          background = {tooltipBgColor}
          color = {tooltipTextColor}
        >
          <a
            href = 'https://www.liperi.fi'
            target = '_blank'
            rel = 'noopener noreferrer'
            style = { {fontSize: '1.3em'} }
            >
              <img
                src = {liperiLogo}
                style = { {width: 'auto', height: '2em'} }
                alt = 'Liperi'
              />
            </a>
        </Tooltip>
      </div>
    </footer>
  );
};

export default Footer;