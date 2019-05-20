import React from 'react';
import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from './Header.module.scss';
import logo from 'assets/img/logo-small.png';

function Logo() {
  return (
    <Link to='/'>
      <img styleName='logo' src={logo} alt='Small logo.' />
    </Link>
  );
}

export default CSSModules(Logo, styles);
