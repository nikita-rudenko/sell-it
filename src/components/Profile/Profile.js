import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchProfileData } from 'actions/profile';

import CSSModules from 'react-css-modules';
import styles from './Profile.module.scss';
import defAvatar from 'assets/img/avatar-default.png';

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfileData();
  }

  renderProfileData = () => {
    const { isFetching, profileData } = this.props;

    if (!isFetching && profileData) {
      const {
        avatar,
        email,
        first_name,
        last_name,
        location,
        username
      } = profileData;
      return (
        <>
          <div styleName='heading'>
            <h1>Profile</h1>
          </div>
          <img
            styleName='avatar'
            src={avatar ? avatar : defAvatar}
            alt='Avatar.'
          />
          <h1>{username ? username : 'Your username'}</h1>
          <ul styleName='info-list'>
            {first_name && last_name ? (
              <li>
                Full name: `${last_name} ${last_name}`
              </li>
            ) : null}
            {email ? <li>Email: {email}</li> : null}
            {location ? <li>Location: {location}</li> : null}
          </ul>
        </>
      );
    } else {
      return null;
    }
  };

  render() {
    return <div styleName='user'>{this.renderProfileData()}</div>;
  }
}

const mapStateToProps = state => ({
  profileData: state.profile.profileData,
  isFetching: state.profile.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchProfileData: () => dispatch(fetchProfileData())
});

Profile.propTypes = {
  profileData: PropTypes.object,
  isFetching: PropTypes.bool,
  fetchProfileData: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Profile, styles));
