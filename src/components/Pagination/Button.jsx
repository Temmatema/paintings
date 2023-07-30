import React from 'react'

const Button = ({ onClick, disabled, children }) => (
  <button className='pagination__btn' disabled={disabled} onClick={onClick}>
    {children}
  </button>
)

export default Button
