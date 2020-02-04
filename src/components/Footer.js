import React from 'react';

import fbLogo from '../img/fbLogo.png';

const Footer = () => {

  return(
    <div className='footer' style={{paddingTop: '2vh', paddingBottom: '3vh', textAlign: 'center'}}>
      <p style={{fontSize: '1.25em', fontWeight: 'bold'}}>
        Tiedustelut ja ryhmävaraukset <br /> 
        puh. 040 703 7478 <br />
        Ristinkyläntie 1, Liperi
      </p>
      <div style={{marginTop: '1vh', textAlign: 'center'}}>
        <a 
          href='https://www.facebook.com/ristin.kesateatteri' 
          target='_blank' 
          rel='noopener noreferrer'
          style={{fontSize: '1.3em'}}>
            <img 
              src={fbLogo}
              style={{width: '2em', height: '2em'}}
              alt='fb-logo' 
            />
            Teatterin facebook sivuille
        </a>
      </div>
    </div>
  );
};

export default Footer;