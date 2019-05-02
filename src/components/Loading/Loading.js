import React from 'react';
import styles from './Loading.module.scss';
import CSSModules from 'react-css-modules';
import loading from '../../img/gif/loading.gif';

function Loading() {
  return (
    <div styleName='container'>
      <img src={loading} alt='Loading...' />
      <div styleName='loading'>Loading</div>
    </div>
  );
}

export default CSSModules(Loading, styles);
