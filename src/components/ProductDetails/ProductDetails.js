import React, { Component } from 'react';
import styles from './ProductDetails.module.scss';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { getDetails } from '../../actions/ProductActions';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class ProductDetails extends Component {
  componentDidMount() {
    const { productID } = this.props;
    this.props.getDetails(productID);
  }

  render() {
    const { details } = this.props;

    console.log(details);
    return (
      <>
        <Header />
        <div>
          {details ? (
            <div styleName='container'>
              <div styleName='details-wrapper'>
                <div styleName='image-wrapper'>
                  <img
                    styleName='image'
                    src={
                      details.images.length
                        ? details.images[0].file
                        : 'img/default.jpg'
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
                </div>
              </div>
            </div>
          ) : (
            'Loading...'
          )}
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  productID: state.productID,
  details: state.details
});

const mapDispatchToProps = dispatch => ({
  getDetails: id => dispatch(getDetails(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(ProductDetails, styles));
