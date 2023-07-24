import Header from "./components/Header";
import Main from "./components/Main";
import {apiPaintings, getAuthors, getLocations} from "./utils/api";
import { useEffect, useState } from "react";
import { Context } from "./context";
import axios from "axios";

function App() {
  const [authors, setAuthors] = useState(null);
  const [locations, setLocations] = useState(null);
  const [paintings, setPaintings] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.all([apiPaintings(), getLocations(), getAuthors()])
      .then(responses => {
        setPaintings(responses[0].data);
        setLocations(responses[1].data);
        setAuthors(responses[2].data);
        setTotalPages(responses[0].headers['x-total-count'])
        setIsLoading(false);
      })
  }, []);

  return (
    <div className="container">
      <Header />
      <Context.Provider
        value={{
          authors,
          setPaintings,
          setTotalPages,
          totalPages,
          paintings,
          locations,
          setIsLoading,
          isLoading,
          page,
          setPage
        }}
      >
        <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
