import { contactPath } from '~/src/helpers/routes';
import ContactsPage from '~/src/components/views/Contacts';

export default {
  path: contactPath(),
  exact: true,
  strict: true,
  component: ContactsPage,
};
