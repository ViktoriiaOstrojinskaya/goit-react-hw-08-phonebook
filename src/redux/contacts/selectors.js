export const selectLoading = state => state.contacts.isloading;

export const selectError = state => state.contacts.error;

export const selectAllContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;
