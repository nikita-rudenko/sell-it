import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from './ModalSuccess.module.scss';
import successImg from 'assets/img/icons/success-icon.png';

const ModalSuccess = props => {
  return (
    <div styleName='success'>
      <img styleName='success-image' src={successImg} alt='Success.' />
      <h2 styleName='success-title'>Product was added successfully!</h2>
      <div styleName='success-buttons'>
        <button onClick={props.resetSuccess} styleName='success-btn'>
          Add More
        </button>
        <button styleName='success-btn'>
          <Link to='/'>To Main</Link>
        </button>
      </div>
    </div>
  );
};

ModalSuccess.propTypes = {
  resetSuccess: PropTypes.func
};

export default CSSModules(ModalSuccess, styles);
