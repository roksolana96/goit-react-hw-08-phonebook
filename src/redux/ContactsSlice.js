import { createSlice } from '@reduxjs/toolkit';
// import { addContact, deleteContact, fetchContacts} from 'services/fetchApi';

import { 
  addContacts, 
  clearContacts, 
  deleteContacts, 
  fetchContacts,
} from './ContactsApi';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload.id);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(deleteContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(clearContacts.fulfilled, (state, { payload }) => {
        state.items = [];
        state.isLoading = false;
      });
  },
});

export const userReducer = userSlice.reducer;





// const initialState = {
//   contacts: [],
// };

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: (state, { payload }) => {
//       state.contacts.push(payload);
//     },
//     deleteContact: (state, { payload }) => {
//       state.contacts = state.contacts.filter(item => item.id !== payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactSlice.actions;
// export const userReducer = contactSlice.reducer;