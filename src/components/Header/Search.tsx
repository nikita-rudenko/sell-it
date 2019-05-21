import React from 'react';

import { connect } from 'react-redux';
// @ts-ignore
import { searchProducts } from 'actions/products';

import CSSModules from 'react-css-modules';
import styles from './Header.module.scss';
import searchIcon from 'assets/img/icons/fa-search.png';

interface Actions {
  searchProducts: (query: string) => void;
}

class Search extends React.Component<Actions> {
  handleSearch = (e: React.ChangeEvent<any>) => {
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

// @ts-ignore
const mapDispatchToProps = dispatch => ({
  searchProducts: (query: string) => dispatch(searchProducts(query))
});

// Search.propTypes = {
//   searchProducts: PropTypes.func
// };

export default connect(
  null,
  mapDispatchToProps
)(CSSModules(Search, styles));
