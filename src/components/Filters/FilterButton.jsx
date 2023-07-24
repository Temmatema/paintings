import React from 'react';
import { ReactComponent as ArrowBtn } from "../../img/arrow-small.svg";

const FilterButton = ({ isActive, onClick, buttonText }) => {
  return (
    <button className={`filter__btn ${isActive ? 'is-active' : ''}`} onClick={onClick}>
      <span>{buttonText}</span>
      <ArrowBtn />
    </button>
  );
};

export default FilterButton;
