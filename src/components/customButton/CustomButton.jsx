import React from 'react'
import './customButton.scss'
const CustomButton = ({title}) => {
  return (
    <button className='custom-button'>
        {title}
    </button>
  )
}

export default CustomButton