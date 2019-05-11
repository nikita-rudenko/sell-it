import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import { fetchProfileData } from 'actions/profile';

import CSSModules from 'react-css-modules';
import styles from './Profile.module.scss';
import avatar from 'assets/img/avatar-default.png';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Loading from 'components/Loading/Loading';

class Profile extends Component {
  // componentDidMount() {
  //   this.props.fetchProfileData();
  // }

  render() {
    const { userData, isFetching } = this.props;

    return (
      <>
        <Header />
        {!isFetching ? (
          <div styleName='container'>
            <div styleName='user'>
              <img styleName='avatar' src={avatar} alt='Avatar.' />
              <h1>{userData === null ? 'Username' : userData.username}</h1>
            </div>
          </div>
        ) : (
          <Loading />
        )}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  const { userData, isFetching } = state.auth;
  return { userData, isFetching };
};

// const mapDispatchToProps = dispatch => ({
//   fetchProfileData: () => dispatch(fetchProfileData())
// });

Profile.propTypes = {
  userData: PropTypes.object,
  isFetching: PropTypes.bool
  //   fetchProfileData: PropTypes.func
};

export default connect(
  mapStateToProps,
  null
)(CSSModules(Profile, styles));
