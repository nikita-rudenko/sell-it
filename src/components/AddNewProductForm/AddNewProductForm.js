import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addNewProduct, resetSuccess } from 'actions/products';

import { reset, reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import {
  FormInput,
  FormRequiredInput,
  FormCheckbox
  // FormSelect
} from './ReduxForm';

import styles from './AddNewProductForm.module.scss';

import ModalSuccess from './ModalSuccess';

class AddNewProductForm extends React.Component {
  componentWillUnmount() {
    this.props.resetSuccess();
  }

  // adds new product & resets the form
  onSubmit = (values, dispatch) => {
    this.props.addNewProduct(values);
    dispatch(reset('add-new-product'));
  };

  // resets addNewSuccess in reducer => hides modal window
  resetSuccess = () => {
    this.props.resetSuccess();
  };

  renderModalSuccess = addNewSuccess => {
    return addNewSuccess ? (
      <ModalSuccess resetSuccess={this.resetSuccess} />
    ) : null;
  };

  render() {
    const { submitting, handleSubmit, addNewSuccess } = this.props;

    return (
      <>
        {this.renderModalSuccess(addNewSuccess)}

        <form className={styles.body} onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <label className={styles.label} htmlFor='theme'>
              Theme <span className={styles.required}>*</span>
            </label>
            <Field
              className={styles.input}
              component={FormRequiredInput}
              name='theme'
              id='theme'
              type='text'
            />
            <label className={styles.label} htmlFor='theme'>
              Text
            </label>
            <Field
              className={styles.input}
              component={FormInput}
              name='text'
              id='text'
              type='text'
            />
            <label className={styles.label} htmlFor='price'>
              Price
            </label>
            <Field
              className={styles.input}
              component={FormInput}
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
              component={FormCheckbox}
              name='contractPrice'
              id='contractPrice'
              type='checkbox'
            />

            {/* <label htmlFor='isActive'>is active</label>
      <Field
      component={checkBoxField}
      name='isActive'
      id='isActive'
      type='checkbox'
    /> */}
          </div>
          <button className={styles.submit} type='submit' disabled={submitting}>
            Publish
          </button>
        </form>
      </>
    );
  }
}

AddNewProductForm = reduxForm({
  form: 'add-new-product'
})(AddNewProductForm);

const mapStateToProps = state => ({
  addNewSuccess: state.product.addNewSuccess
});

const mapDispatchToProps = dispatch => ({
  addNewProduct: data => dispatch(addNewProduct(data)),
  resetSuccess: () => dispatch(resetSuccess())
});

AddNewProductForm.propTypes = {
  addNewProduct: PropTypes.func,
  resetSuccess: PropTypes.func,
  addNewSuccess: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewProductForm);
