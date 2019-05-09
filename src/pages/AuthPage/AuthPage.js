import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn, signUp } from 'actions/authActions';

import CSSModules from 'react-css-modules';
import styles from './AuthPage.module.scss';
import logo from 'assets/img/logo-big.png';

import SignIn from 'components/SignIn/SignIn';
import SignUp from 'components/SignUp/SignUp';
import Loading from 'components/Loading/Loading';

class AuthPage extends Component {
  // send data from according form (path)
  submit = values => {
    if (this.props.match.path === '/sign-in') {
      this.props.signIn(values);
    } else {
      this.props.signUp(values);
    }
  };

  // render form according to current path
  renderForm = () => {
    const { path } = this.props.match;
    const styleSignInTab = path === '/sign-in' ? 'tab tab-active' : 'tab';
    const styleSignUpTab = path === '/sign-up' ? 'tab tab-active' : 'tab';
    const formToRender =
      path === '/sign-in' ? (
        <SignIn onSubmit={this.submit} />
      ) : (
        <SignUp onSubmit={this.submit} />
      );

    return (
      <div>
        <div styleName='tabs'>
          <Link to='/sign-in' name='sign-in' styleName={styleSignInTab}>
            <span>Sign In</span>
          </Link>
          <Link to='/sign-up' name='sign-up' styleName={styleSignUpTab}>
            <span>Sign Up</span>
          </Link>
        </div>
        <div>{formToRender}</div>
      </div>
    );
  };

  render() {
    const { isFetching } = this.props;

    return (
      <div styleName='auth-page'>
        <div styleName='background' />

        <div styleName='sidebar'>
          <div>
            <img src={logo} alt='Big logo.' />
          </div>
          {!isFetching ? this.renderForm() : <Loading />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.form.isFetching
});

const mapDispatchToProps = dispatch => ({
  signIn: userData => dispatch(signIn(userData)),
  signUp: userData => dispatch(signUp(userData))
});

AuthPage.propTypes = {
  isFetching: PropTypes.bool,
  signIn: PropTypes.func,
  signUp: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(AuthPage, styles, { allowMultiple: true }));
