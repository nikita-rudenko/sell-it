import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './ProfilePage.module.scss';
import MainLayout from 'layouts/MainLayout';

import Profile from 'components/Profile/Profile';
import UserProducts from 'components/UserProducts/UserProducts';

const ProfilePage = () => {
  return (
    <MainLayout>
      <div styleName='container'>
        <Profile />
        <UserProducts />
      </div>
    </MainLayout>
  );
};

export default CSSModules(ProfilePage, styles);
