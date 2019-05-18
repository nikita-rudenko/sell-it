import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './MainLayout.module.scss';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function MainLayout(props) {
  return (
    <>
      <Header />
      <div styleName='container'>{props.children}</div>
      <Footer />
    </>
  );
}

export default CSSModules(MainLayout, styles);
