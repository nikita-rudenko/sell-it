import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import {
  FormField,
  RequiredFormField,
  checkBoxField
  // selectField
} from './FormField';

import styles from './AddNewPostForm.module.scss';

let AddNewItemForm = ({ handleSubmit, submitting }) => (
  <form className={styles.body} onSubmit={handleSubmit}>
    <div>
      <label className={styles.label} htmlFor='theme'>
        Theme <span className={styles.required}>*</span>
      </label>
      <Field
        className={styles.input}
        component={RequiredFormField}
        name='theme'
        id='theme'
        type='text'
      />
      <label className={styles.label} htmlFor='theme'>
        Text
      </label>
      <Field
        className={styles.input}
        component={FormField}
        name='text'
        id='text'
        type='text'
      />
      <label className={styles.label} htmlFor='price'>
        Price
      </label>
      <Field
        className={styles.input}
        component={FormField}
        name='price'
        id='price'
        type='number'
        min='0'
      />

      {/* <label className={styles.label} htmlFor='currency'>
        Currency
      </label>
      <Field
        component={selectField}
        name='currency'
        id='currency'
        type='dropdown'
      >
        <option>- select -</option>
        <option name='dollar'>Dollar</option>
        <option name='euro'>Euro</option>
      </Field> */}

      <label className={styles.label} htmlFor='contractPrice'>
        Contract Price
      </label>
      <Field
        component={checkBoxField}
        name='contractPrice'
        id='contractPrice'
        type='checkbox'
      />

      <label className={styles.label} htmlFor='location'>
        Location
      </label>
      <Field
        className={styles.input}
        component={FormField}
        name='location'
        id='location'
        type='number'
      />

      <label htmlFor='isActive'>is active</label>
      <Field
        component={checkBoxField}
        name='isActive'
        id='isActive'
        type='checkbox'
      />
    </div>
    <button className={styles.submit} type='submit' disabled={submitting}>
      Publish
    </button>
  </form>
);

AddNewItemForm = reduxForm({
  form: 'add-new-item'
})(AddNewItemForm);

export default AddNewItemForm;
