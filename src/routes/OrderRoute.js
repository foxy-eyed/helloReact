import { orderPath } from '~/src/helpers/routes';
import OrderPage from '~/src/components/views/Order/';

export default {
  path: orderPath(),
  exact: true,
  strict: true,
  component: OrderPage,
};
