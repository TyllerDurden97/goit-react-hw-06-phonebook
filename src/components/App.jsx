import { React } from "react";
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import css from 'components/App.module.css';

export const App = () => {
   
   return (
      <div className={css.pageWrap}>
         <h1 className={css.pageTitle}>Phonebook</h1>
         <ContactForm
         />
         <h2 className={css.title}>Contacts</h2>
         <div className={css.contactsArea}>
            <Filter
            />
            <ContactList
            />
         </div>
      </div>
   );           
   };

