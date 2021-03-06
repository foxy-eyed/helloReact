import { productPath } from '~/src/helpers/routes';
import ProductPage from '~/src/components/views/Product';

export default {
  path: productPath(),
  exact: true,
  strict: true,
  component: ProductPage,
};
