import React, {useContext} from 'react';
import {debounce} from "lodash";
import {Context} from "../../context";
import {apiPaintings} from "../../utils/api";

const FilterName = () => {
  const { setPaintings, setTotalPages, setPage } = useContext(Context);

  const changeHandler = debounce((e) => {
    const value = e.target.value;
    apiPaintings({q: value.length ? value : null, _page: 1}).then(res => {
      setPaintings(res.data);
      setPage(1);
      setTotalPages(res.headers['x-total-count']);
    });
  }, 500)

  return (
    <div className="filter__field filter-name">
      <label>
        <input type="text" onChange={(e) => changeHandler(e)} placeholder="Name"/>
      </label>
    </div>
  );
};

export default FilterName;
