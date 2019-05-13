import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchProfileData } from 'actions/profile';

import CSSModules from 'react-css-modules';
import styles from './Profile.module.scss';
import defAvatar from 'assets/img/avatar-default.png';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Loading from 'components/Loading/Loading';

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
        <div styleName='container'>
          <div styleName='user'>
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
          </div>
        </div>
      );
    } else {
      return <Loading />;
    }
  };

  render() {
    return (
      <>
        <Header />
        {this.renderProfileData()}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  const { profileData, isFetching } = state.profile;
  return { isFetching, profileData };
};

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
