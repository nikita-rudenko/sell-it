import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ProductList } from './ProductList';
import Loading from 'components/Loading/Loading';
import ProductItem from 'components/ProductItem/ProductItem';

Enzyme.configure({ adapter: new Adapter() });

describe('ProductList tests', () => {
  const props = {
    isFetching: false,
    data: null
  };

  describe('ProductList initial', () => {
    const productList = shallow(<ProductList {...props} />, {
      disableLifecycleMethods: true
    });

    it("doesn't render ProductItems", () => {
      expect(productList.find(ProductItem)).toHaveLength(0);
    });

    it("doesn't render <Loading />", () => {
      expect(productList.find(Loading)).toHaveLength(0);
    });

    it('renders properly', () => {
      expect(productList).toMatchSnapshot();
    });
  });

  describe('ProductList is fetching', () => {
    const nextProps = {
      ...props,
      isFetching: true
    };

    const productList = shallow(<ProductList {...nextProps} />, {
      disableLifecycleMethods: true
    });

    it('renders preloader', () => {
      expect(productList.find(Loading)).toHaveLength(1);
    });

    it("doesn't render <p>", () => {
      expect(productList.find('p')).toHaveLength(0);
    });

    it("doesn't render <ProductList />", () => {
      expect(productList.find(ProductItem)).toHaveLength(0);
    });

    it('renders properly', () => {
      expect(productList).toMatchSnapshot();
    });
  });

  describe('ProductList renders items', () => {
    const nextProps = {
      isFetching: false,
      productList: [
        {
          pk: 344,
          theme: 'Telefon',
          text: 'Testovy text'
        }
      ]
    };

    const productList = shallow(<ProductList {...nextProps} />, {
      disableLifecycleMethods: true
    });

    it('renders items', () => {
      expect(productList.find(ProductItem)).toHaveLength(1);
    });

    it("doesn't render preloader", () => {
      expect(productList.find(Loading)).toHaveLength(0);
    });

    it("doesn't render <p>", () => {
      expect(productList.find('p')).toHaveLength(0);
    });

    it('renders properly', () => {
      expect(productList).toMatchSnapshot();
    });
  });

  describe('ProductList no data received', () => {
    const nextProps = {
      isFetching: false,
      productList: []
    };

    const productList = shallow(<ProductList {...nextProps} />, {
      disableLifecycleMethods: true
    });

    it('renders <p>', () => {
      expect(productList.find('p')).toHaveLength(0);
    });

    it("doesn't render items", () => {
      expect(productList.find(ProductItem)).toHaveLength(0);
    });

    it("doesn't render preloader", () => {
      expect(productList.find(Loading)).toHaveLength(0);
    });

    it('renders properly', () => {
      expect(productList).toMatchSnapshot();
    });
  });
});
