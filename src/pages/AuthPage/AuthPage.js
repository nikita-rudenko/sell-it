import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn, signUp, resetError } from 'actions/auth';

import CSSModules from 'react-css-modules';
import styles from './AuthPage.module.scss';
import logo from 'assets/img/logo-big.png';

import SignIn from 'components/SignIn/SignIn';
import SignUp from 'components/SignUp/SignUp';
import Loading from 'components/Loading/Loading';

class AuthPage extends Component {
  // send data from according form (path)
  submit = values => {
    if (this.props.match.path === '/signin') {
      this.props.signIn(values);
    } else {
      this.props.signUp(values);
    }
  };

  resetErrors = () => {
    this.props.resetError();
  };

  componentWillUnmount() {
    this.props.resetError();
  }

  // render form according to current path
  renderForm = () => {
    const path = this.props.match.path;
    const error = this.props.error;

    const formToRender =
      // PATH ? SIGN IN : SIGN UP
      path === '/signin' ? (
        <SignIn onSubmit={this.submit} errorMessage={error}>
          <div styleName='tabs'>
            <Link
              to='/signin'
              onClick={this.resetErrors}
              name='signin'
              styleName='tab tab-active'
            >
              <span>Sign In</span>
            </Link>
            <Link
              to='/signup'
              onClick={this.resetErrors}
              name='signup'
              styleName='tab'
            >
              <span>Sign Up</span>
            </Link>
          </div>
        </SignIn>
      ) : (
        <SignUp onSubmit={this.submit} errorMessage={error}>
          <div styleName='tabs'>
            <Link
              to='/signin'
              onClick={this.resetErrors}
              name='signin'
              styleName='tab'
            >
              <span>Sign In</span>
            </Link>
            <Link
              to='/signup'
              onClick={this.resetErrors}
              name='signup'
              styleName='tab tab-active'
            >
              <span>Sign Up</span>
            </Link>
          </div>
        </SignUp>
      );

    return formToRender;
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
  isFetching: state.form.isFetching,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  signIn: userData => dispatch(signIn(userData)),
  signUp: userData => dispatch(signUp(userData)),
  resetError: () => dispatch(resetError())
});

AuthPage.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.object,
  signIn: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  resetError: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(AuthPage, styles, { allowMultiple: true }));
