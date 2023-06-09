import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    value: [],
  },
  reducers: {
    addContacts: state => {
      state.value += 1;
    },
    deleteContact: (state, action) => {
      state.filter(contact => contact.id !== action);
    },
  },
});

export const { addContacts, deleteContact } = contactsSlice.actions;
