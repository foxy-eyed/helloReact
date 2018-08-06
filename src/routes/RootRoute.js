import { rootPath } from '../helpers/routes';
import CatalogPage from '../components/views/Catalog';

export default {
  path: rootPath(),
  exact: true,
  strict: true,
  component: CatalogPage,
};
