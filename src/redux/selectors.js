
export const phonebookSelector = (state) => state.phonebook
export const filteredNamesArr = (state) => (state.phonebook.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.phonebook.filter.toLowerCase())));
