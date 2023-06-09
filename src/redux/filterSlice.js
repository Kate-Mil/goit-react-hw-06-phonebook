import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    filterContacts: (state, action) => {
      state.filter(contact => contact.name.toLowerCase().includes(action));
    },
  },
});

export const { filterContacts } = filterSlice.actions;
