import React from 'react';

import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
});

let FormComp = props => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <label htmlFor="firstName"> First Name </label>
      <Field name="firstName" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="lastName"> Last Name </label>
      <Field name="lastName" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="email"> Email </label>
      <Field name="email" component="input" type="email" />
    </div>
    <button type="submit"> Submit </button>
  </form>
);

FormComp = reduxForm({
  form: 'uniqname'
})(FormComp);

export default FormComp;
