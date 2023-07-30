import React, { useCallback, useContext, useState } from 'react'
import { debounce } from 'lodash'
import { Context } from '../../../context'
import { apiPaintings } from '../../../utils/api'

const FilterName = () => {
  const { setPaintings, setTotalPages, setPage } = useContext(Context)
  const [searchValue, setSearchValue] = useState('')

  const apiCallWithDebounce = useCallback(
    debounce((value) => {
      apiPaintings({ q: value.length ? value : null, _page: 1 }).then((res) => {
        setPaintings(res.data)
        setPage(1)
        setTotalPages(res.headers['x-total-count'])
      })
    }, 500),
    [setPaintings, setTotalPages, setPage],
  )

  const changeHandler = (e) => {
    const value = e.target.value
    setSearchValue(value)
    apiCallWithDebounce(value)
  }

  return (
    <div className='filter__field filter-name'>
      <label>
        <input type='text' onChange={changeHandler} placeholder='Name' value={searchValue} />
      </label>
    </div>
  )
}

export default FilterName
