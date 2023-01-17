import {
  ListItem,
  ListTitle,
  ButtonDelete,
  ContactItem,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectAllContacts);
  const filterName = useSelector(selectFilter);

  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <ul>
      <ListTitle>
        {filteredContacts.length === 0 ? (
          <p style={{ marginTop: '30px', color: '#0b4779' }}>
            We didn`t find contacts your request 😭
          </p>
        ) : (
          <p style={{ marginTop: '30px', color: 'rgb(145 37 0)' }}>
            {`You have ${filteredContacts.length} contacts`}
          </p>
        )}
      </ListTitle>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactItem>
            {name}: {number}
          </ContactItem>
          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ButtonDelete>
        </ListItem>
      ))}
    </ul>
  );
};
