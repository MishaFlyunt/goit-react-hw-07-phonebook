import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contact',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContact.pending]: handlePending,
    [fetchContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      console.log(state.items);
    },
    [fetchContact.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
