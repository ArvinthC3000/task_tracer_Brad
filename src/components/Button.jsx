import PropTypes from 'prop-types';

const Button = ({ text, color, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick}
      className='btn'>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'steelBlue',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
