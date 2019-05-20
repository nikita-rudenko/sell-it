import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { searchProducts } from 'actions/products';

import CSSModules from 'react-css-modules';
import styles from './Header.module.scss';
import searchIcon from 'assets/img/icons/fa-search.png';

class Search extends Component {
  handleSearch = e => {
    this.props.searchProducts(e.target.value);
  };

  render() {
    return (
      <div styleName='search'>
        <img styleName='icon' src={searchIcon} alt='Search icon' />
        <input
          styleName='input'
          type='text'
          placeholder='Try to find something'
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchProducts: query => dispatch(searchProducts(query))
});

Search.propTypes = {
  searchProducts: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(CSSModules(Search, styles));
