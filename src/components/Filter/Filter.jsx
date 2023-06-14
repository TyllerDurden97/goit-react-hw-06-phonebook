import React from "react";
import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css';
import { useSelector } from "react-redux";
import { phonebookSelector } from "redux/selectors";

export const Filter = ({ onChange }) => {
   const { filter } = useSelector(phonebookSelector);

   return <label className={css.filterLabel}>Find contacts by name:
         <input
            type="text"
            value={filter}
            onChange={onChange}
            className={css.filterInpt}
         />
   </label>
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};
