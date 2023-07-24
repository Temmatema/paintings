import React, {useContext} from "react";
import CardList from "./CardList";
import Pagination from "./Pagination";
import Filters from "./Filters/Filters";
import { Context} from "../context";
import Loader from "./Loader";

const Main = () => {
  const {authors, paintings, totalPages, locations} = useContext(Context)

  return (
    <main className="main">
      <Filters/>
      {
        (!paintings || !authors || !locations) ? (
        <Loader/>
      ) : (
        <CardList paintings={paintings}/>
      )}
      {totalPages ? (
        <Pagination/>
      ) : null}
    </main>
  );
};

export default Main;
