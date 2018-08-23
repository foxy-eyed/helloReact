import { cartPath } from '~/src/helpers/routes';
import CartPage from '~/src/components/views/Cart';

export default {
  path: cartPath(),
  exact: true,
  strict: true,
  component: CartPage,
};
