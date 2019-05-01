import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Header.module.scss';

function Header() {
  return (
    <header styleName='header'>
      <img styleName='logo' src='img/logo-small-min.png' alt='Small logo.' />
      <div styleName='search'>
        <img styleName='icon' src='img/icons/fa-search.png' alt='Search icon' />
        <input
          styleName='input'
          type='text'
          placeholder='Try to find something'
        />
      </div>
      <div styleName='userblock'>
        <div styleName='profile'>
          <img styleName='avatar' src='img/avatar-min.png' alt='User avatar' />
          <div styleName='name'>Kim Evans</div>
        </div>
        <Link styleName='sign-out' to='/login'>
          <img
            src='img/icons/fa-sign-out.png'
            title='Sign Out'
            alt='Sign Out.'
          />
        </Link>
        <div styleName='sub-menu'>
          <button styleName='sub-action'>Add new post</button>
          <button styleName='sub-action'>Profile</button>
        </div>
      </div>
    </header>
  );
}

export default CSSModules(Header, styles);
