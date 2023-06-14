import { createSlice } from "@reduxjs/toolkit";
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
   key: 'persistPhonebook',
   storage,
   whitelist: ['contacts'],
};

const initialState = {
   contacts: [],
   filter: '',
};

export const phonebookSlice = createSlice({
   name: 'phonebook',
   initialState,
   reducers: {
      addContact: (state, { payload }) => {
         state.contacts.push(payload)
      },
      filterContacts: (state, { payload }) => {
         state.filter = payload
      },
      deleteContact: (state, { payload }) => {
         state.contacts = state.contacts.filter(contact => contact.id !== payload)
      }
   },   
});

export const { addContact, filterContacts, deleteContact } = phonebookSlice.actions;
export const persistedPhonebookReducer = persistReducer(persistConfig, phonebookSlice.reducer);
