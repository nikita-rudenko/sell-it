import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
  isFetching: state.form.isFetching,
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  addNewProduct: data => dispatch(addNewProduct(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(AddNewPost, styles, { allowMultiple: true }));
