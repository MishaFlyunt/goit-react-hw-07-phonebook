import { GlobalStyle, Container } from './GlobalStyle';
import React from 'react';
import { Toaster } from 'react-hot-toast';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {

  // const changeFilter = newFilter => {
  //   setFilter(newFilter.target.value.toLowerCase().trim());
  // };

  // const handleDelete = contId => {
  //   setContacts(prevState => prevState.filter(cont => cont.id !== contId));
  // };


  // const getVisibleContacts = () => {
  //   const lowerCaseFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().trim().includes(lowerCaseFilter)
  //   );
  // };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />

      <Toaster position="top-center" reverseOrder={false} />
      <GlobalStyle />
    </Container>
  );
};
