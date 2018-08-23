import { rootPath } from '~/src/helpers/routes';
import CatalogPage from '~/src/components/views/Catalog';

export default {
  path: rootPath(),
  exact: true,
  strict: true,
  component: CatalogPage,
};
