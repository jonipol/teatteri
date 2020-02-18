import React from 'react';

const About = () => {

  const width = '95%';
  const height = '500px';
  const zoom = 11;
  
  return(
    <div style = { {position: 'relative', textAlign: 'center', height: {height}, width: {width}} }>
      <div style = { {overflow: 'hidden', background: 'none!important', height: {height}, width: {width}} }>
        <iframe 
          width={width}
          height={height}
          id = 'gmap_canvas'
          src = {`https://maps.google.com/maps?q=Ristinkyläntie+1,+83330+Liperi&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`}
          frameBorder = '0'
          scrolling = 'no'
          marginHeight = '0'
          marginWidth = '0'
        ></iframe>
      </div>
    </div>
  );
};

export default About;