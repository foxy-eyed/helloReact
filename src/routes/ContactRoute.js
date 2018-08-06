import { contactPath } from '../helpers/routes';
import ContactsPage from '../components/views/Contacts';

export default {
  path: contactPath(),
  exact: true,
  strict: true,
  component: ContactsPage,
};
