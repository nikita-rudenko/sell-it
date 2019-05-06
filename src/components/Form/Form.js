import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Form.module.scss';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { signIn, signUp } from '../../actions/authActions';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: true
    };

    this.handleSwitchTabs = this.handleSwitchTabs.bind(this);
  }

  handleSwitchTabs = e => {
    const target = e.target.name === 'sign-in' ? true : false;
    this.setState({
      showSignIn: target
    });
  };

  submit = values => {
    if (this.state.showSignIn) {
      this.props.signIn(values);
    } else {
      this.props.signUp(values);
    }
  };

  render() {
    const { showSignIn } = this.state;

    // button styles
    const btnSignIn = `btn btn-small ${showSignIn ? 'btn-active' : ''}`;
    const btnSignUp = `btn btn-small ${showSignIn ? '' : 'btn-active'}`;

    return (
      <div>
        <div styleName='tabs'>
          <button
            onClick={this.handleSwitchTabs}
            name='sign-in'
            styleName={btnSignIn}
          >
            Sign In
          </button>
          <button
            onClick={this.handleSwitchTabs}
            name='sign-up'
            styleName={btnSignUp}
          >
            Sign Up
          </button>
        </div>
        <div>
          {showSignIn ? (
            <SignIn onSubmit={this.submit} />
          ) : (
            <SignUp onSubmit={this.submit} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching
});

const mapDispatchToProps = dispatch => ({
  signIn: userData => dispatch(signIn(userData)),
  signUp: userData => dispatch(signUp(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Form, styles, { allowMultiple: true }));
