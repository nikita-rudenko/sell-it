import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetails } from 'actions/products';

import styles from './ProductDetails.module.scss';
import CSSModules from 'react-css-modules';
import defaultImg from 'assets/img/default.jpg';

import Loading from 'components/Loading/Loading';
import MainLayout from 'layouts/MainLayout';

class ProductDetails extends Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.props.getDetails(params.productId);
  }

  renderDetails = () => {
    const { details, isFetching } = this.props;

    return (
      <div styleName='container'>
        {details && !isFetching ? (
          <div styleName='details-wrapper'>
            <div styleName='image-wrapper'>
              <img
                styleName='image'
                src={
                  details.images.length ? details.images[0].file : defaultImg
                }
                alt='Product.'
              />
            </div>
            <div styleName='info-wrapper'>
              <h1 styleName='title'>{details.theme}</h1>
              <div styleName='info-block'>
                <p styleName='from'>
                  from <span styleName='author'>{details.owner.username}</span>
                </p>
                <p styleName='price'>{details.price} $</p>
              </div>
              <p styleName='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                lectus sem, vestibulum non venenatis at, condimentum varius
                enim. Nullam consectetur tellus ac fermentum mattis.
              </p>
              <p styleName='description'>
                Maecenas ut sapien at nunc efficitur fringilla non porttitor
                risus. Phasellus aliquam mauris in urna hendrerit semper. Nullam
                molestie eu arcu id luctus. Nulla vulputate id velit et egestas.
                Nunc tempus mi eget nunc placerat, volutpat sagittis quam
                faucibus. Nam sed convallis elit, ut placerat dolor.
              </p>
              <Link styleName='link' to='/'>
                Back to Product List
              </Link>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  };

  render() {
    return <MainLayout>{this.renderDetails()}</MainLayout>;
  }
}

const mapStateToProps = state => ({
  details: state.product.details,
  isFetching: state.product.isFetching
});

const mapDispatchToProps = dispatch => ({
  getDetails: id => dispatch(getDetails(id))
});

ProductDetails.propTypes = {
  details: PropTypes.object,
  isFetching: PropTypes.bool,
  getDetails: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(ProductDetails, styles));
