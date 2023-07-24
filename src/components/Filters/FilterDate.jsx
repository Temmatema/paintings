import React, {useContext, useRef, useState} from "react";
import { ReactComponent as ArrowBtn } from "../../img/arrow-small.svg";
import { debounce } from "lodash";
import { apiPaintings } from "../../utils/api";
import { Context } from "../../context";

const FilterDate = () => {
  const [isActive, setIsActive] = useState(false);
  const { setPaintings, setIsLoading, setPage, setTotalPages } = useContext(Context);
  const [isError, setIsError] = useState(false);
  const inputStart = useRef(null)
  const inputEnd = useRef(null)

  const valueHandler = (e) => {
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0,4);
    }
    sendValue(e);
  }

  const sendValue = debounce(() => {
    setIsLoading(true);
    setIsError(false);

    const start = inputStart.current.value;
    const end = inputEnd.current.value;

    apiPaintings({
      created_gte: checkValue(start),
      created_lte: checkValue(end),
      _page: 1
    })
      .then((res) => {
        if (!res.data.length) {
          setIsError(true)
          setIsLoading(false);
        } else {
          setPaintings(res.data);
          setIsLoading(false);
          setPage(1);
          setTotalPages(res.headers['x-total-count']);
        }
      });
  },2000);

  function checkValue(value) {
    if (value.length < 4 && value.length !== 0) {
      return 1000;
    } else if (value.length) {
      return value;
    } else {
      return null;
    }
  }

  return (
    <div className="filter__field filter-select">
      <button
        className={`filter__btn filter__btn--date ${
          isActive ? "is-active" : ""
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <span>Created</span>
        <ArrowBtn />
      </button>

      <div
        className={`select select-date 
      ${isActive ? "is-active" : ""}
      ${isError ? "is-error" : ""}`}
      >
        <input
          type="number"
          placeholder="from"
          ref={inputStart}
          onChange={(e) => valueHandler(e)}
        />
        <input
          type="number"
          ref={inputEnd}
          placeholder="before"
          onChange={(e) => valueHandler(e)}
        />
      </div>
    </div>
  );
};

export default FilterDate;
