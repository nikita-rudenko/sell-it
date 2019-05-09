import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfileData } from 'actions/profileActions';

import CSSModules from 'react-css-modules';
import styles from './Profile.module.scss';
import avatar from 'assets/img/avatar.png';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Loading from 'components/Loading/Loading';

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfileData();
  }

  render() {
    const { profileData, isFetching } = this.props;

    return (
      <>
        <Header />
        {!isFetching ? (
          <div styleName='container'>
            <div styleName='user'>
              <img styleName='avatar' src={avatar} alt='Avatar.' />
              <h1>{profileData}</h1>
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
  const { profileData, isFetching } = state.profile;
  return {
    profileData,
    isFetching
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProfileData: () => dispatch(fetchProfileData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Profile, styles));
