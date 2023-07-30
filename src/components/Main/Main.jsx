import React, { useContext } from 'react'
import CardList from '../CardList/CardList'
import Pagination from '../Pagination/Pagination'
import Filters from '../Filters/Filters'
import { Context } from '../../context'
import Loader from '../Loader/Loader'

const Main = () => {
  const { authors, paintings, totalPages, locations } = useContext(Context)

  return (
    <main className='main'>
      <Filters />
      {!paintings.length && !authors.length && !locations.length ? <Loader /> : <CardList paintings={paintings} />}
      {totalPages && <Pagination />}
    </main>
  )
}

export default Main
