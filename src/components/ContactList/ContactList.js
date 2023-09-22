import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import {
  ContactListStyled,
  ContactItemStyled,
  ButtonStyled,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // const getVisibleContacts = () => {
  //   const lowerCaseFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().trim().includes(lowerCaseFilter)
  //   );
  // };
 console.log(contacts);
  const getContacts = contacts.filter(({ name }) =>
    name.toLowerCase().trim().includes(filter.toLowerCase())
  );
  // const getContact = getVisibleContacts();
 
  return (
    <ContactListStyled>
      {getContacts.map(({ id, name, number }) => (
        <ContactItemStyled key={id}>
          <p>
            {name}: {number}
          </p>
          <ButtonStyled
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </ButtonStyled>
        </ContactItemStyled>
      ))}
    </ContactListStyled>
  );
};
