import React from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// @ts-ignore
import { signOut } from 'actions/auth';

import CSSModules from 'react-css-modules';
import styles from './Header.module.scss';
import defAvatar from 'assets/img/avatar-default.png';
import iconSignOut from 'assets/img/icons/fa-sign-out.png';

interface UserBlock {
  userData: UserData;
  isFetching: boolean;
}

interface UserBlockDispatch {
  signOut: () => void;
}

interface UserData {
  avatar: string;
  username: string;
}

class UserBlock extends React.Component<UserBlock & UserBlockDispatch> {
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

const mapStateToProps = (state: any): any => ({
  userData: state.auth.userData,
  isFetching: state.auth.isFetching
});

const mapDispatchToProps = (dispatch: any) => ({
  signOut: () => dispatch(signOut())
});

// UserBlock.propTypes = {
//   userData: PropTypes.object,
//   isFetching: PropTypes.bool,
//   signOut: PropTypes.func
// };

export default connect<UserBlock, UserBlockDispatch, {}, any>(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(UserBlock, styles));
