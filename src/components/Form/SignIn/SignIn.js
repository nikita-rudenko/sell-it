import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import styles from './SignIn.module.scss';

let SignIn = props => (
  <form className={styles.body} onSubmit={props.handleSubmit}>
    <div>
      <Field
        className={styles.input}
        component='input'
        name='email'
        id='email'
        type='email'
        placeholder='Email'
      />
      <Field
        className={styles.input}
        component='input'
        name='password'
        id='password'
        type='password'
        placeholder='Password'
      />
    </div>
    <button className={styles.submit} type='submit'>
      Sign In
    </button>
  </form>
);

SignIn = reduxForm({
  form: 'sign-in'
})(SignIn);

export default SignIn;
