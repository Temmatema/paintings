import React, { useContext } from 'react'
import { getPages } from '../../utils/pages'
import { ReactComponent as Arrow } from '../../img/pag-arrow.svg'
import { ReactComponent as DoubleArrow } from '../../img/pag-double-arrow.svg'
import { Context } from '../../context'
import { debounce } from 'lodash'
import { apiPaintings } from '../../utils/api'
import Button from './Button'
import PageButton from './PageButton'
import NotFound from '../NotFound/NotFound'

const Pagination = () => {
  let { totalPages, setPaintings, setIsLoading, page, setPage, paintings } = useContext(Context)
  totalPages = getPages(totalPages)

  const changeHandler = debounce((value) => {
    setIsLoading(true)
    apiPaintings({ _page: value }).then((res) => {
      setPage(value)
      setPaintings(res.data)
      setIsLoading(false)
    })
  }, 500)

  if (!paintings.length) {
    return <NotFound />
  }

  if (totalPages.length < 2) {
    return null
  }

  return (
    <div className='pagination'>
      <Button disabled={page <= 1} onClick={() => changeHandler(1)}>
        <DoubleArrow style={{ transform: 'rotateZ(180deg)' }} />
      </Button>
      <Button disabled={page <= 1} onClick={() => changeHandler(page - 1)}>
        <Arrow style={{ transform: 'rotateZ(180deg)' }} />
      </Button>
      <ul className='pagination__list'>
        {totalPages.map((el) => (
          <PageButton key={el} isActive={page === el} onClick={() => changeHandler(el)}>
            {el}
          </PageButton>
        ))}
      </ul>
      <Button disabled={page === totalPages.length} onClick={() => changeHandler(page + 1)}>
        <Arrow />
      </Button>
      <Button disabled={page === totalPages.length} onClick={() => changeHandler(totalPages.length)}>
        <DoubleArrow />
      </Button>
    </div>
  )
}

export default Pagination
