import React from 'react';
import styles from './Loading.module.scss';
import CSSModules from 'react-css-modules';

function Loading() {
  return (
    <div styleName='container'>
      <img src='img/gif/loading.gif' alt='Loading...' />
      <div styleName='loading'>Loading</div>
    </div>
  );
}

export default CSSModules(Loading, styles);
