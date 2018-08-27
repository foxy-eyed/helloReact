import { connect } from 'react-redux';
import { find } from 'lodash/collection';

import DetailedView from '~/src/components/views/Product/DetailedView';

const mapStateToProps = (state, ownProps) => {
  const { products } = state.catalog;
  return (
    {
      product: find(products, product => product.id === parseInt(ownProps.productId, 10)),
    }
  );
};

export default connect(mapStateToProps)(DetailedView);
