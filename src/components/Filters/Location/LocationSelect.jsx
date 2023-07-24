import React from 'react';
import { motion } from "framer-motion";
import Loader from "../../Loader";

const LocationSelect = ({ isActive, locations, onSelect }) => {
  return (
    <motion.ul className={`select ${isActive ? 'is-active' : ''}`}
               animate={{ height: isActive ? "auto" : 0 }}
               transition={{ duration: 0.2 }}
    >
      {!locations ? (
        <Loader/>
      ) : (
        locations.map((el) => (
          <button key={el.id} onClick={() => onSelect(el)} className="select__item">
            <span>{el.location}</span>
          </button>
        ))
      )}
    </motion.ul>
  );
};

export default LocationSelect;
