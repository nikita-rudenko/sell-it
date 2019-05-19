import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from './AddNewProduct.module.scss';

import MainLayout from 'layouts/MainLayout';
import AddNewProductForm from 'components/AddNewProductForm/AddNewProductForm';

class AddNewProduct extends Component {
  render() {
    return (
      <MainLayout>
        <div styleName='form-wrapper'>
          <AddNewProductForm styleName='form' />
        </div>
      </MainLayout>
    );
  }
}

export default CSSModules(AddNewProduct, styles, { allowMultiple: true });
