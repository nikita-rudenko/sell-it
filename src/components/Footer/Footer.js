import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Footer.module.scss';

const Footer = () => {
  return <footer styleName='footer'>2017 - front-end labs Light IT</footer>;
};

export default CSSModules(Footer, styles);
