import PropTypes from 'prop-types';

export const productPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
});

export const cartItemPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
});
