import React from "react";
import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.module.css';
import { filteredNamesArr } from "redux/selectors";
import { useSelector } from "react-redux";

export const ContactList = ({  onDeleteContact }) => {
   const  filteredNames  = useSelector(filteredNamesArr);

   return( 
   <ul className={css.contactsList}>
      {filteredNames.map(({ id, name, number }) => (
         <li key={id} className={css.contactsListItem}>
            <span className={css.contactsListSpan}>{name}:</span>
            <span className={css.contactsListSpan}>{number}</span>
            <button
               onClick={() => onDeleteContact(id)}
               className={css.contactsListBtn}>Delete
            </button>
         </li>
      ))}
   </ul>)  
}

ContactList.propTypes = {
  filteredNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};