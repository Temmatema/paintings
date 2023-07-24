import React, { useContext, useState } from "react";
import { Context } from "../../context";
import { ReactComponent as ArrowBtn } from "../../img/arrow-small.svg";
import { ReactComponent as Close } from "../../img/close.svg";
import { apiPaintings } from "../../utils/api";

const FilterLocation = () => {
  const [isActive, setIsActive] = useState(false);
  const [locName, setLocName] = useState("");

  const { locations, setPaintings, setTotalPages, setPage } = useContext(Context);

  function clearSelect() {
    setLocName("");
    apiPaintings({ locationId: null, _page: 1 }).then((res) => {
      setPage(1);
      setTotalPages(res.headers['x-total-count']);
      setPaintings(res.data)
    });
  }

  function locationSelect(el) {
    setLocName(el.location);
    setIsActive(false);
    apiPaintings({ locationId: el.id, _page: 1 }).then((res) => {
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
        <span>{locName === "" ? "Location" : locName}</span>
        <ArrowBtn />
      </button>
      {locName !== "" ? (
        <button className="filter__clear" onClick={() => clearSelect()}>
          <Close />
        </button>
      ) : null}

      <ul className={`select ${isActive ? "is-active" : ""}`}>
        {!locations ? (
          <div>Loading...</div>
        ) : (
          locations.map((el) => {
            return (
              <button
                key={el.id}
                onClick={() => locationSelect(el)}
                className="select__item"
              >
               <span>{el.location}</span>
              </button>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default FilterLocation;
