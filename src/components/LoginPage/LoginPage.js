import React from 'react';
import styles from './LoginPage.module.scss';
import Form from '../Form/Form';
import CSSModules from 'react-css-modules';

function LoginPage() {
  return (
    <>
      <div styleName='login-page'>
        <div styleName='background' />

        <div styleName='sidebar'>
          <div>
            <img src='/img/logo-big-min.png' alt='Big logo.' />
          </div>

          <Form />
        </div>
      </div>
      {/* <footer className="footer">
					<span>2017 - front-end labs Light IT</span>
				</footer> */}
    </>
  );
}

export default CSSModules(LoginPage, styles, { allowMultiple: true });
