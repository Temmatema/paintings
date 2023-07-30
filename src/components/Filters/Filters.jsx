import React, { memo } from 'react'
import FilterName from './FilterName/FilterName'
import FilterAuthor from './FilterAuthor/FilterAuthor'
import FilterLocation from './FilterLocation/FilterLocation'
import FilterDate from './FilterDate/FilterDate'

const Filters = () => {
  return (
    <div className='filter'>
      <div className='filter__wrap'>
        <FilterName />
        <FilterAuthor />
        <FilterLocation />
        <FilterDate />
      </div>
    </div>
  )
}

export default memo(Filters)
