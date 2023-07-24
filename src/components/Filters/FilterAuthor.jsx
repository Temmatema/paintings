import React, { useContext, useState } from "react";
import { ReactComponent as ArrowBtn } from "../../img/arrow-small.svg";
import { ReactComponent as Close } from "../../img/close.svg";
import { Context } from "../../context";
import { apiPaintings } from "../../utils/api";

const FilterAuthor = () => {
  const [isActive, setIsActive] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const { authors, setPaintings, setTotalPages, setPage } = useContext(Context);

  function authorSelect(el) {
    setAuthorName(el.name);
    setIsActive(false);
    apiPaintings({ authorId: el.id, _page: 1 }).then((res) => {
      setPage(1);
      setTotalPages(res.headers['x-total-count']);
      setPaintings(res.data)
    });
  }

  function clearSelect() {
    setAuthorName("");
    apiPaintings({ authorId: null, _page: 1 }).then((res) => {
      setPage(1);
      setTotalPages(res.headers['x-total-count']);
      setPaintings(res.data)
    });
  }

  return (
    <div className="filter__field filter-select">
      <button
        className={`filter__btn ${isActive ? "is-active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span>{authorName === "" ? "Author" : authorName}</span>
        <ArrowBtn />
      </button>
      {authorName !== "" ? (
        <button className="filter__clear" onClick={() => clearSelect()}>
          <Close />
        </button>
      ) : null}

      <ul className={`select ${isActive ? "is-active" : ""}`}>
        {!authors ? (
          <div>Loading...</div>
        ) : (
          authors.map((el) => {
            return (
              <button
                onClick={() => authorSelect(el)}
                key={el.id}
                className="select__item"
              >
                <span>{el.name}</span>
              </button>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default FilterAuthor;
