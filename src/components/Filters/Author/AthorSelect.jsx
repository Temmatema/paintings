import React from 'react';

const AuthorSelect = ({ isActive, authors, onSelect }) => {
  return (
    <ul className={`select ${isActive ? 'is-active' : ''}`}>
      {!authors ? (
        <div>Loading...</div>
      ) : (
        authors.map((el) => (
          <button key={el.id} onClick={() => onSelect(el)} className="select__item">
            <span>{el.name}</span>
          </button>
        ))
      )}
    </ul>
  );
};

export default AuthorSelect;
