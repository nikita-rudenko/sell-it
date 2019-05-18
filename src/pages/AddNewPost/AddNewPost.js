import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewProduct } from 'actions/products';

import MainLayout from '../../layouts/MainLayout';
import AddNewPostForm from 'components/AddNewPostForm/AddNewPostForm';

import CSSModules from 'react-css-modules';
import styles from './AddNewPost.module.scss';

class AddNewPost extends Component {
  submit = values => {
    this.props.addNewProduct(values);
  };
  render() {
    return (
      <MainLayout>
        <div styleName='form-wrapper'>
          <AddNewPostForm onSubmit={this.submit} styleName='form' />
        </div>
      </MainLayout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNewProduct: data => dispatch(addNewProduct(data))
});

AddNewPost.propTypes = {
  addNewProduct: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(CSSModules(AddNewPost, styles, { allowMultiple: true }));
