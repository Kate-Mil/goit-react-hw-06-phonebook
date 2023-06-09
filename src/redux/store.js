import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice, filterSlice } from './index';

export default configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
