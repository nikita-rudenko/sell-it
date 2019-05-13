import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewProduct } from 'actions/products';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import AddNewPostForm from 'components/AddNewPostForm/AddNewPostForm';

import CSSModules from 'react-css-modules';
import styles from './AddNewPost.module.scss';

class AddNewPost extends Component {
  submit = values => {
    this.props.addNewProduct(values);
  };
  render() {
    return (
      <>
        <Header />
        <div styleName='form-wrapper'>
          <h1 styleName='heading-text'>Add New Post</h1>
          <AddNewPostForm onSubmit={this.submit} styleName='form' />
        </div>
        <Footer />
      </>
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
