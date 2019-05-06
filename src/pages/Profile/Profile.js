import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CSSModules from 'react-css-modules';
import styles from './Profile.module.scss';
import avatar from '../../assets/img/avatar.png';

function Profile() {
  return (
    <>
      <Header />
      <div styleName='container'>
        <div styleName='user'>
          <img styleName='avatar' src={avatar} alt='Avatar.' />
          <h1>Kim Evans</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CSSModules(Profile, styles);
