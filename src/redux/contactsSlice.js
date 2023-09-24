import { createSlice } from '@reduxjs/toolkit';

import contacts from '../components/contact.json';

const contactsInitialState = contacts;

const contactsSlice = createSlice({
  name: 'contact',
  initialState: { items: contactsInitialState },
  initialStateFilter: '',
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(contact => contact.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
