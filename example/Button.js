import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  color: '#fff',
  cursor: 'pointer',
  backgroundColor: '#33c066',
  border: 'none',
  borderRadius: 5,
  fontSize: 14,
  padding: '20px 30px',
};

const propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  label: 'Button Label',
  disabled: false,
};

function Button({ disabled, label, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      style={styles}
    >
      {label}
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
