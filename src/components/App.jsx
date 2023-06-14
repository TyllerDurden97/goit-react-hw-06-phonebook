import { React } from "react";
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { phonebookSelector } from "redux/selectors";
import css from 'components/App.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addContact, filterContacts, deleteContact } from "redux/phonebookSlice";


export const App = () => {

   const { contacts } = useSelector(phonebookSelector);
   const dispatch = useDispatch();
   const formSubmitData = (name, number) => {
      const newContact = {
         name,
         number,
         id: nanoid(),
      };
      const filteredContact = contacts.filter(contact =>
         contact.name.toLowerCase() === newContact.name.toLowerCase()).length;
    
      if (filteredContact) {
         return Notify.info(`${name} is already in Contacts`)
      } else {
         dispatch(addContact(newContact))
      };
   };
   
   const handleFilterChange = (e) => {
      dispatch(filterContacts(e.currentTarget.value))
      };      

   const deleteContactFromList = contactId => {
      dispatch(deleteContact(contactId))
   };
   
   return (
      <div className={css.pageWrap}>
         <h1 className={css.pageTitle}>Phonebook</h1>
         <ContactForm
            onSubmitData={formSubmitData}
         />
         <h2 className={css.title}>Contacts</h2>
         <div className={css.contactsArea}>
            <Filter
               onChange={handleFilterChange} />
            <ContactList
               onDeleteContact={deleteContactFromList} />
         </div>
      </div>
   );           
   };

