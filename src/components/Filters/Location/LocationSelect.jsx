import React from 'react';

const LocationSelect = ({ isActive, locations, onSelect }) => {
  return (
    <ul className={`select ${isActive ? 'is-active' : ''}`}>
      {!locations ? (
        <div>Loading...</div>
      ) : (
        locations.map((el) => (
          <button key={el.id} onClick={() => onSelect(el)} className="select__item">
            <span>{el.location}</span>
          </button>
        ))
      )}
    </ul>
  );
};

export default LocationSelect;
