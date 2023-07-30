import React from 'react'

const PageButton = ({ isActive, onClick, children }) => (
  <li className='pagination__item'>
    <button onClick={onClick} className={isActive ? 'pagination__btn is-active' : 'pagination__btn'}>
      {children}
    </button>
  </li>
)

export default PageButton
