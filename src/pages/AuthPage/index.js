import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './AuthPage.module.scss';
import logo from '../../assets/img/logo-big.png';
import { connect } from 'react-redux';
import { signIn, signUp } from '../../actions/authActions';
import { Link } from 'react-router-dom';
import SignIn from '../../components/Form/SignIn';
import SignUp from '../../components/Form/SignUp';
import Loading from '../../components/Loading/Loading';

class LoginPage extends Component {
  submit = values => {
    if (this.props.match.path === '/sign-in') {
      this.props.signIn(values);
    } else {
      this.props.signUp(values);
    }
  };

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
      <div styleName='login-page'>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(LoginPage, styles, { allowMultiple: true }));
