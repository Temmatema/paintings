import React, { useContext, useState } from 'react'
import { ReactComponent as Close } from '../../../img/close.svg'
import { Context } from '../../../context'
import { apiPaintings } from '../../../utils/api'
import FilterButton from '../FilterButton/FilterButton'
import AuthorSelect from './AuthorSelect/AthorSelect'
import OutsideClickHandler from 'react-outside-click-handler/esm/OutsideClickHandler'

const FilterAuthor = () => {
  const [isActive, setIsActive] = useState(false)
  const [authorName, setAuthorName] = useState('')
  const { authors, setPaintings, setTotalPages, setPage } = useContext(Context)

  const authorSelect = (el) => {
    setAuthorName(el.name)
    setIsActive(false)
    updatePaintings(el.id)
  }

  const clearSelect = () => {
    setAuthorName('')
    updatePaintings(null)
  }

  const updatePaintings = (authorId) => {
    apiPaintings({ authorId, _page: 1 }).then((res) => {
      setPage(1)
      setTotalPages(res.headers['x-total-count'])
      setPaintings(res.data)
    })
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setIsActive(false)}>
      <div className='filter__field filter-author filter-select'>
        <FilterButton
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
          buttonText={authorName || 'FilterAuthor'}
        />
        {authorName && (
          <button className='filter__clear' onClick={clearSelect}>
            <Close />
          </button>
        )}

        <AuthorSelect isActive={isActive} authors={authors} onSelect={authorSelect} />
      </div>
    </OutsideClickHandler>
  )
}

export default FilterAuthor
