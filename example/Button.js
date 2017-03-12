import React from 'react';

const styles = {
  color: '#fff',
  cursor: 'pointer',
  backgroundColor: '#33c066',
  border: 'none',
  borderRadius: 5,
  fontSize: 14,
  padding: '20px 30px',
};

const Button = ({ disabled, label, style, onClick }) => (
  <button disabled={disabled} onClick={onClick}
    style={styles}
  >
    {label}
  </button>
);

Button.displayName = 'Button';
Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};
Button.defaultProps = {
  label: 'Button Label',
  style: {},
  disabled: false,
};

export default Button;
