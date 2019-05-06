import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import CSSModules from 'react-css-modules';
import styles from './LoginPage.module.scss';
import logo from '../../assets/img/logo-big.png';

class LoginPage extends Component {
  render() {
    return (
      <div styleName='login-page'>
        <div styleName='background' />

        <div styleName='sidebar'>
          <div>
            <img src={logo} alt='Big logo.' />
          </div>
          <Form />
        </div>
      </div>
    );
  }
}

export default CSSModules(LoginPage, styles, { allowMultiple: true });
