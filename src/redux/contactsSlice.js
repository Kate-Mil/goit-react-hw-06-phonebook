import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },

  reducers: {
    addContacts: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContacts, deleteContact } = contactsSlice.actions;
