import React, { Component } from 'react';
import styles from './ProductDetails.module.scss';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetails } from '../../actions/ProductActions';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import defaultImg from '../../assets/img/default.jpg';

class ProductDetails extends Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    console.log(params.productId);

    this.props.getDetails(params.productId);
  }

  render() {
    const { details, isFetching } = this.props;

    return (
      <>
        <Header />
        <div>
          {details && !isFetching ? (
            <div styleName='container'>
              <div styleName='details-wrapper'>
                <div styleName='image-wrapper'>
                  <img
                    styleName='image'
                    src={
                      details.images.length
                        ? details.images[0].file
                        : defaultImg
                    }
                    alt='Product.'
                  />
                </div>
                <div styleName='info-wrapper'>
                  <h1 styleName='title'>{details.theme}</h1>
                  <div styleName='info-block'>
                    <p styleName='from'>
                      from{' '}
                      <span styleName='author'>{details.owner.username}</span>
                    </p>
                    <h2 styleName='price'>{details.price} $</h2>
                  </div>
                  <p styleName='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    lectus sem, vestibulum non venenatis at, condimentum varius
                    enim. Nullam consectetur tellus ac fermentum mattis.
                  </p>
                  <p styleName='description'>
                    Maecenas ut sapien at nunc efficitur fringilla non porttitor
                    risus. Phasellus aliquam mauris in urna hendrerit semper.
                    Nullam molestie eu arcu id luctus. Nulla vulputate id velit
                    et egestas. Nunc tempus mi eget nunc placerat, volutpat
                    sagittis quam faucibus. Nam sed convallis elit, ut placerat
                    dolor.
                  </p>
                  <Link styleName='link' to='/'>
                    Back to Product List
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  details: state.details,
  isFetching: state.isFetching
});

const mapDispatchToProps = dispatch => ({
  getDetails: id => dispatch(getDetails(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(ProductDetails, styles));
