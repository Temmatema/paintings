import React from 'react';
import { motion } from "framer-motion";
import Loader from "../../Loader";

const AuthorSelect = ({ isActive, authors, onSelect }) => {
  return (
    <motion.ul className={`select ${isActive ? 'is-active' : ''}`}
               animate={{ height: isActive ? "auto" : 0 }}
               transition={{ duration: 0.2 }}>
      {!authors ? (
        <Loader/>
      ) : (
        authors.map((el) => (
          <button key={el.id} onClick={() => onSelect(el)} className="select__item">
            <span>{el.name}</span>
          </button>
        ))
      )}
    </motion.ul>
  );
};

export default AuthorSelect;
