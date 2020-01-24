import React from 'react';

const Footer = () => {

  return(
    <div style={{marginTop: '10px', marginBottom: '10px', textAlign: 'center'}}>
      <p style={{fontSize: '3.5vw', fontWeight: 'bold'}}>
        Tiedustelut ja ryhmävaraukset puh. 040 703 7478 <br />
        Ristinkyläntie 1, Liperi
      </p>
      <div style={{marginTop: '15px', marginBottom: '15px', textAlign: 'center'}}>
        <a href='https://www.facebook.com/ristin.kesateatteri' target='_blank' rel='noopener'>Teatterin facebook sivuille</a>
      </div>
    </div>
  );
};

export default Footer;