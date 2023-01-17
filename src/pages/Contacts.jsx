import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectAllContacts } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectAllContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      {isLoading && <Loader />}
      {contacts.length > 0 && <Filter />}
      {contacts.length === 0 ? (
        <p style={{ marginTop: '30px', color: '#0b4779' }}>
          <b>Your contacts are empty, let`s create them 🚀</b>
        </p>
      ) : (
        <ContactList />
      )}
    </div>
  );
}
