import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import styles from './SignUp.module.scss';

let SignUp = props => (
  <form className={styles.body} onSubmit={props.handleSubmit}>
    <div>
      <Field
        className={styles.input}
        component='input'
        name='firstName'
        id='firstName'
        type='text'
        placeholder='First Name'
      />
      <Field
        className={styles.input}
        component='input'
        name='lastName'
        id='lastName'
        type='text'
        placeholder='Last Name'
      />
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
      Sign Up
    </button>
  </form>
);

SignUp = reduxForm({
  form: 'sign-up'
})(SignUp);

export default SignUp;
