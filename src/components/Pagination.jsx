import React, {useContext, useState} from "react";
import { getPages } from "../utils/pages";
import { ReactComponent as Arrow } from "../img/pag-arrow.svg";
import { ReactComponent as DoubleArrow } from "../img/pag-double-arrow.svg";
import { Context } from "../context";
import {debounce} from "lodash";
import {apiPaintings} from "../utils/api";

const Pagination = () => {
  let { totalPages, setPaintings, setIsLoading, page, setPage } = useContext(Context);
  totalPages = getPages(totalPages);

  const changeHandler = debounce((value) => {
    setIsLoading(true);
    apiPaintings({_page: value}).then(res => {
      setPage(value);
      setPaintings(res.data);
      setIsLoading(false);
    });
  }, 500)

  return (
    <div className="pagination">
      <button
        className="pagination__btn"
        disabled={page <= 1}
        onClick={() => changeHandler(1)}
      >
        <DoubleArrow style={{ transform: "rotateZ(180deg)" }} />
      </button>
      <button
        className="pagination__btn"
        disabled={page <= 1}
        onClick={() => changeHandler(page - 1)}
      >
        <Arrow style={{ transform: "rotateZ(180deg)" }} />
      </button>
      <ul className="pagination__list">
        {totalPages.map((el) => {
          return (
            <li key={el} className="pagination__item">
              <button
                onClick={() => changeHandler(el)}
                className={
                  page === el ? "pagination__btn is-active" : "pagination__btn"
                }
              >
                {el}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className="pagination__btn"
        disabled={page === totalPages.length}
        onClick={() => changeHandler(page + 1)}
      >
        <Arrow />
      </button>
      <button
        className="pagination__btn"
        disabled={page === totalPages.length}
        onClick={() => changeHandler(totalPages.length)}
      >
        <DoubleArrow />
      </button>
    </div>
  );
};

export default Pagination;
