import React from "react";
import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.module.css';
import { filteredNamesArr } from "redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/phonebookSlice";



export const ContactList = () => {
   const filteredNames = useSelector(filteredNamesArr);
   const dispatch = useDispatch();
   const deleteContactFromList = contactId => {
      dispatch(deleteContact(contactId))
   };

   return (
      <ul className={css.contactsList}>
         {filteredNames.map(({ id, name, number }) => (
            <li key={id} className={css.contactsListItem}>
               <span className={css.contactsListSpan}>{name}:</span>
               <span className={css.contactsListSpan}>{number}</span>
               <button
                  onClick={() => deleteContactFromList(id)}
                  className={css.contactsListBtn}>Delete
               </button>
            </li>
         ))}
      </ul>)
};

ContactList.propTypes = {
   filteredNames: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         number: PropTypes.string.isRequired,
      }).isRequired
   )
};
