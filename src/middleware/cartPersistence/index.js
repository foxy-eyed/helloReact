import saveCart from '~/src/middleware/cartPersistence/save';
import loadCart from '~/src/middleware/cartPersistence/load';
import clearCart from '~/src/middleware/cartPersistence/clear';

export default [saveCart, loadCart, clearCart];
