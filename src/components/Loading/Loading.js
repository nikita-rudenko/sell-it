import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Loading.module.scss';
import loading from 'assets/img/gif/loading.gif';

const Loading = () => {
  return (
    <div styleName='container'>
      <img src={loading} alt='Loading...' />
      <div styleName='loading'>Loading</div>
    </div>
  );
};

export default CSSModules(Loading, styles);
