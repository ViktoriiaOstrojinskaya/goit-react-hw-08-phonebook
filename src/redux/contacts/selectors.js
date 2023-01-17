import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.contacts.isloading;

export const selectError = state => state.contacts.error;

export const selectAllContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
