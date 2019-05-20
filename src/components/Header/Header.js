import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Header.module.scss';

import Search from './Search';
import Logo from './Logo';
import UserBlock from './UserBlock';

function Header() {
  return (
    <header styleName='header'>
      <Logo />
      <Search />
      <UserBlock />
    </header>
  );
}

export default CSSModules(Header, styles);
