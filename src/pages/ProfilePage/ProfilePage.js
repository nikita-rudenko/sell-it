import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './ProfilePage.module.scss';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Profile from 'components/Profile/Profile';
import UserProducts from 'components/UserProducts/UserProducts';

const ProfilePage = () => {
  return (
    <>
      <Header />
      <div styleName='container'>
        <>
          <Profile />
          <UserProducts />
        </>
      </div>
      <Footer />
    </>
  );
};

export default CSSModules(ProfilePage, styles);
