import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';

const Facebook = () => (
  <FacebookProvider appId='1062617860758006'>
    <Page 
      href='https://www.facebook.com/ristin.kesateatteri' 
      tabs='timeline'
        
    />
  </FacebookProvider>
);

export default Facebook;