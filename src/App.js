import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { apiPaintings, getAuthors, getLocations } from './utils/api'
import { useEffect, useState } from 'react'
import { Context } from './context'
import axios from 'axios'

function App() {
  const [state, setState] = useState({
    authors: [],
    locations: [],
    paintings: [],
    totalPages: 0,
    isLoading: true,
    page: 1,
  })

  useEffect(() => {
    axios
      .all([apiPaintings(), getLocations(), getAuthors()])
      .then(
        axios.spread((paintingsResponse, locationsResponse, authorsResponse) => {
          setState((prevState) => ({
            ...prevState,
            paintings: paintingsResponse.data,
            locations: locationsResponse.data,
            authors: authorsResponse.data,
            totalPages: paintingsResponse.headers['x-total-count'],
            isLoading: false,
          }))
        }),
      )
      .catch((error) => {
        console.error('Ошибка запроса:', error)
      })
  }, [])

  const contextValue = {
    ...state,
    setPage: (page) => setState((prevState) => ({ ...prevState, page })),
    setPaintings: (paintings) => setState((prevState) => ({ ...prevState, paintings })),
    setTotalPages: (totalPages) => setState((prevState) => ({ ...prevState, totalPages })),
    setIsLoading: (isLoading) => setState((prevState) => ({ ...prevState, isLoading })),
  }

  return (
    <div className='container'>
      <Header />
      <Context.Provider value={contextValue}>
        <Main />
      </Context.Provider>
    </div>
  )
}

export default App
