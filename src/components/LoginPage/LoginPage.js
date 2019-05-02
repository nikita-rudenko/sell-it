import React, { Component } from 'react';

import FormComp from '../Form/ReduxForm';
import CSSModules from 'react-css-modules';
import styles from './LoginPage.module.scss';
import logo from '../../img/logo-big.png';

class LoginPage extends Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return (
      <div styleName="login-page">
        <div styleName="background" />

        <div styleName="sidebar">
          <div>
            <img src={logo} alt="Big logo." />
          </div>

          <FormComp onSubmit={this.submit} />
        </div>
      </div>
    );
  }
}

export default CSSModules(LoginPage, styles, { allowMultiple: true });
