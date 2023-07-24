import React from "react";
import FilterName from "./FilterName";
import FilterAuthor from "./Author/FilterAuthor";
import FilterLocation from "./Location/FilterLocation";
import FilterDate from "./FilterDate";

const Filters = () => {
  return (
    <div className="filter">
      <div className="filter__wrap">
        <FilterName/>
        <FilterAuthor/>
        <FilterLocation/>
        <FilterDate/>
      </div>
    </div>
  );
};

export default Filters;
