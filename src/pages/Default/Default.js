import React from 'react';
import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from './Default.module.scss';

const Default = ({ location }) => {
  return (
    <div styleName='container'>
      <h1 styleName='error'>Error 404</h1>
      <h2 styleName='info'>
        No match for <code>{location.pathname}</code>
      </h2>
      <Link styleName='link' to='/'>
        Main page
      </Link>
    </div>
  );
};

export default CSSModules(Default, styles);
