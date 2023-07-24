import React, {useContext} from "react";
import CardList from "./CardList";
import Pagination from "./Pagination";
import Filters from "./Filters/Filters";
import { Context} from "../context";

const Main = () => {
  const {authors, paintings, totalPages, locations} = useContext(Context)

  return (
    <main className="main">
      <Filters/>
      {
        (!paintings || !authors || !locations) ? (
        <h1 style={{marginBottom: '40px'}}>Loading...</h1>
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
