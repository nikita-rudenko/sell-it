import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchProducts } from 'actions/products';
import { signOut } from 'actions/auth';

import CSSModules from 'react-css-modules';
import styles from './Header.module.scss';
import logo from 'assets/img/logo-small.png';
import searchIcon from 'assets/img/icons/fa-search.png';
import avatar from 'assets/img/avatar.png';
import iconSignOut from 'assets/img/icons/fa-sign-out.png';

class Header extends Component {
  handleSearch = e => {
    this.props.searchProducts(e.target.value);
  };

  handleSignOut = () => {
    this.props.signOut();
  };

  render() {
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
            onChange={this.handleSearch}
          />
        </div>

        <div styleName='userblock'>
          <div styleName='profile'>
            <img styleName='avatar' src={avatar} alt='User avatar' />
            <div styleName='name'>Kim Evans</div>
          </div>
          <Link to='/signin' onClick={this.handleSignOut} styleName='sign-out'>
            <img src={iconSignOut} title='Sign Out' alt='Sign Out.' />
          </Link>
          <div styleName='sub-menu'>
            <Link styleName='sub-action' to='/profile'>
              <span>Add new post</span>
            </Link>
            <Link styleName='sub-action' to='/profile'>
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userData
});

const mapDispatchToProps = dispatch => ({
  searchProducts: query => dispatch(searchProducts(query)),
  signOut: () => dispatch(signOut())
});

Header.propTypes = {
  searchProducts: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Header, styles));
