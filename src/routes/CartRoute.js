import { cartPath } from '../helpers/routes';
import CartPage from '../components/views/Cart';

export default {
  path: cartPath(),
  exact: true,
  strict: true,
  component: CartPage,
};
