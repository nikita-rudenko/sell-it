import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo-small.png';
import searchIcon from '../../assets/img/icons/fa-search.png';
import avatar from '../../assets/img/avatar.png';
import signOut from '../../assets/img/icons/fa-sign-out.png';
import { searchProducts } from '../../actions/productActions';

class Header extends Component {
  handleSearch = e => {
    this.props.searchProducts(e.target.value);
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
          <Link styleName='sign-out' to='/sign-in'>
            <img src={signOut} title='Sign Out' alt='Sign Out.' />
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

const mapDispatchToProps = dispatch => ({
  searchProducts: query => dispatch(searchProducts(query))
});

export default connect(
  null,
  mapDispatchToProps
)(CSSModules(Header, styles));
