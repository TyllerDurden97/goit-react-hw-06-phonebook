import React from "react";
// import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css';
import { useDispatch, useSelector } from "react-redux";
import { phonebookSelector } from "redux/selectors";
import { filterContacts } from "redux/phonebookSlice";


export const Filter = () => {
   const { filter } = useSelector(phonebookSelector);
   const dispatch = useDispatch();
   const handleFilterChange = (e) => {
      dispatch(filterContacts(e.currentTarget.value))
      };    

   return <label className={css.filterLabel}>Find contacts by name:
         <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            className={css.filterInpt}
         />
   </label>
};

// Filter.propTypes = {
//     onChange: PropTypes.func.isRequired,
// };
