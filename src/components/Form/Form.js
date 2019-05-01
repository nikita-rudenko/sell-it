import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Form.module.scss';

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

  render() {
    const { showSignIn } = this.state;

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
          <form styleName='body' action='#'>
            <div>
              <input
                styleName='input'
                id='email'
                type='email'
                placeholder='Email'
                required
              />
              <input
                styleName='input'
                id='password'
                type='password'
                placeholder='Password'
                required
              />
            </div>
            <Link styleName='btn btn-big' to='/'>
              {showSignIn ? 'Login' : 'Register'}
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default CSSModules(Form, styles, { allowMultiple: true });
