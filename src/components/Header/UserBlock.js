import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from 'actions/auth';

import CSSModules from 'react-css-modules';
import styles from './Header.module.scss';
import defAvatar from 'assets/img/avatar-default.png';
import iconSignOut from 'assets/img/icons/fa-sign-out.png';

class UserBlock extends Component {
  handleSignOut = () => {
    this.props.signOut();
  };

  renderUserBlock = () => {
    const { userData, isFetching } = this.props;

    if (userData && !isFetching) {
      const { avatar, username } = userData;
      return (
        <>
          <div styleName='profile'>
            <img
              styleName='avatar'
              src={avatar ? avatar : defAvatar}
              alt='User avatar'
            />
            <div styleName='name'>{username ? username : 'Username'}</div>
          </div>
          <button onClick={this.handleSignOut} styleName='sign-out'>
            <img src={iconSignOut} title='Sign Out' alt='Sign Out.' />
          </button>
          <div styleName='sub-menu'>
            <Link styleName='sub-action' to='/add'>
              <span>Add new post</span>
            </Link>
            <Link styleName='sub-action' to='/profile'>
              <span>Profile</span>
            </Link>
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  render() {
    return <div styleName='userblock'>{this.renderUserBlock()}</div>;
  }
}

const mapStateToProps = state => ({
  userData: state.auth.userData,
  isFetching: state.auth.isFetching
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

UserBlock.propTypes = {
  userData: PropTypes.object,
  isFetching: PropTypes.bool,
  signOut: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(UserBlock, styles));
