import { productPath } from '../helpers/routes';
import ProductPage from '../components/views/Product';

export default {
  path: productPath(),
  exact: true,
  strict: true,
  component: ProductPage,
};
