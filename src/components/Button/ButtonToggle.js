import React from 'react'

import './ButtonToggle.scss'

const ButtonToggle = ({ onPriceToggle }) => {
  return (
    <div className="btn-toggle flex">
      <input type="checkbox" id="switch" onClick={onPriceToggle} />
      <label htmlFor="switch">Toggle</label>
    </div>
  )
}

export default ButtonToggle
