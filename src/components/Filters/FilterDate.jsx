import React, {useContext, useRef, useState} from "react";
import { ReactComponent as ArrowBtn } from "../../img/arrow-small.svg";
import { debounce } from "lodash";
import { apiPaintings } from "../../utils/api";
import { Context } from "../../context";

const FilterDate = () => {
  const [isActive, setIsActive] = useState(false);
  const { setPaintings, setIsLoading, setPage, setTotalPages } = useContext(Context);
  const inputStart = useRef(null);
  const inputEnd = useRef(null);

  const valueHandler = () => {
    sendValue();
  };

  const sendValue = debounce(() => {
    const start = inputStart.current.value;
    const end = inputEnd.current.value;
    const created_gte = checkValue(start);
    const created_lte = checkValue(end);

    apiPaintings({
      created_gte,
      created_lte,
      _page: 1,
    })
      .then((res) => {
        setPaintings(res.data);
        setIsLoading(false);
        setPage(1);
        setTotalPages(res.headers['x-total-count']);
      });
  }, 1000);

  const checkValue = (value) => {
    return value.length < 4 && value.length !== 0 ? 1000 : value || null;
  };

  return (
    <div className="filter__field filter-date filter-select">
      <button
        className={`filter__btn filter__btn--date ${isActive ? "is-active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span>Created</span>
        <ArrowBtn />
      </button>

      <div className={`select select-date ${isActive ? "is-active" : ""}`}>
        <input type="number" placeholder="from" ref={inputStart} onChange={valueHandler}/>
        <input type="number" ref={inputEnd} placeholder="before" onChange={valueHandler}/>
      </div>
    </div>
  );
};

export default FilterDate;
