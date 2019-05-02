import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Header.module.scss';
import logo from '../../img/logo-small.png';
import searchIcon from '../../img/icons/fa-search.png';
import avatar from '../../img/avatar.png';
import signOut from '../../img/icons/fa-sign-out.png';

function Header() {
  return (
    <header styleName='header'>
      <Link to='/'>
        <img styleName='logo' src={logo} alt='Small logo.' />
      </Link>
      <div styleName='search'>
        <img styleName='icon' src={searchIcon} alt='Search icon' />
        <input
          styleName='input'
          type='text'
          placeholder='Try to find something'
        />
      </div>
      <div styleName='userblock'>
        <div styleName='profile'>
          <img styleName='avatar' src={avatar} alt='User avatar' />
          <div styleName='name'>Kim Evans</div>
        </div>
        <Link styleName='sign-out' to='/login'>
          <img src={signOut} title='Sign Out' alt='Sign Out.' />
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
