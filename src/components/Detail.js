import React from 'react'
import './Detail.css'

const Detail = (props) => {
  return (
    <div>

      <div className='detailTitleBar'>
        <div className='detailIcon'>
          <p>X</p>
        </div>
        <div className='detailTitle'>
          <p>{props.title}</p>
        </div>
        <div className='detailCollapse'>
          <p>X</p>
        </div>
      </div>


    </div>
  )
}

export default Detail