// src/Footer.js
import React from 'react';
import { cn } from '@bem-react/classname';
import { Text } from '@consta/uikit/Text';
import './Footer.css';

const cnFooter = cn('Footer');
const cnApp = cn('App');

const Footer = () => {
    return (
      <div className={cnFooter()}>
        <div className={cnApp('container')}>
          <div className={cnFooter('Copyright')}>
          <Text view="ghost">© 2024</Text>
          </div>
        </div>
      </div>
    );
  };
  
export default Footer;